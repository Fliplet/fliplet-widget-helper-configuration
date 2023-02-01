<template>
  <div class="interface">
    <validation-observer v-slot="{ validate }" ref="observer">
      <form ref="form" class="form-horizontal" v-on:submit.prevent="validate().then(onSubmit)">
        <header>
          <p>
            {{ widgetName || displayName || name }}
            <a v-if="supportUrl" :href="supportUrl" class="help-icon" target="_blank">
              <i class="fa fa-question-circle-o"></i>
            </a>
          </p>
        </header>
        <template v-for="field in configuration.fields">
          <field ref="fieldInstances" v-bind="field" v-bind:key="field.name"></field>
        </template>
        <div class="form-group" v-if="showSubmit">
          <div class="col-sm-8 col-sm-offset-4">
            <input class="btn btn-primary" ref="submitButton" type="submit" />
          </div>
        </div>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import bus from './libs/bus';
import Field from './components/Field';
import { findAll, findOne, findChildren, registerFields } from './libs/lookups';

export default {
  components: {
    field: Field,
    validationObserver: VeeValidate.ValidationObserver
  },
  data() {
    return _.assign(
      {
        fields: {},
        showSubmit: window.parent === window && Fliplet.Env.get('development')
      },
      Fliplet.Widget.getData(),
      {
        widgetName: window.__widgetData[Fliplet.Widget.getData().id].name
      }
    );
  },
  methods: {
    // Methods can be used when the Vue instance is passed as context for
    // the change and ready callback functions
    find: findAll,
    findOne: findOne,
    children: findChildren,
    onUpdateValue(name, value) {
      this.fields[name] = value;

      const field = _.find(this.configuration.fields, { name });

      if (!field) {
        return;
      }

      field.value = value;
    },
    async onSubmit(valid) {
      //  Validation failed
      if (!valid) {
        const $errors = $('.has-error:visible');

        if ($errors.length) {
          // Scroll user to first visible field with error
          $('html, body').stop().animate({
            scrollTop: $errors.eq(0).offset().top
          }, {
            duration: 200
          });
        }

        return;
      }

      var beforeSave;

      await Promise.all(this.$refs.fieldInstances.map((field) => {
        if (field.show === false) {
          delete this.fields[field.name];

          return;
        }

        return field.onSubmit();
      }));

      if (this.configuration.beforeSave) {
        var beforeSaveFunction = typeof this.configuration.beforeSave === 'function'
          ? this.configuration.beforeSave
          : new Function(this.configuration.beforeSave)();

        if (beforeSaveFunction) {
          try {
            beforeSave = beforeSaveFunction.call(this, this.fields, this.configuration);
          } catch (e) {
            // eslint-disable-next-line no-console
            console.warn('The beforeSave function has thrown an error', e, this.configuration.beforeSave);

            Fliplet.Modal.alert({ message: Fliplet.parseError(e) });
          }
        }
      }

      if (!(beforeSave instanceof Promise)) {
        beforeSave = Promise.resolve();
      }

      beforeSave.then(() => {
        // Remove reactivity so objects are properly converted
        // into data that can be transmitted
        let data;

        try {
          data = JSON.parse(JSON.stringify(this.fields));
        } catch (e) {
          // Silent error
        }

        data = _.omit(data, [
          'id', 'package', 'uuid', 'version'
        ]);

        if (this.uuid) {
          // Save to widget instance settings data
          return Fliplet.Widget.save(data).then(function() {
            return Fliplet.Widget.complete();
          });
        }

        Fliplet.Studio.emit('page-preview-send-event', {
          type: 'helper-configuration-updated',
          data: data
        });

        if (!Fliplet.Env.get('development')) {
          Fliplet.Studio.emit('widget-save-complete');
        } else {
          // eslint-disable-next-line no-console
          console.debug(data);
        }
      }).catch(function(err) {
        // eslint-disable-next-line no-console
        console.warn('Cannot save helper configuration', err);

        Fliplet.Modal.alert({ title: 'Error saving configurations', message: Fliplet.parseError(err) });
      });
    }
  },
  mounted() {
    Fliplet.Widget.onSaveRequest(() => {
      if (window.currentProvider) {
        window.currentProvider.forwardSaveRequest();

        return;
      }

      return this.$refs.observer.validate()
        .then((valid) => {
          return this.onSubmit(valid);
        });
    });

    if (this.configuration.ready) {
      var ready = typeof this.configuration.ready === 'function'
        ? this.configuration.ready
        : new Function(this.configuration.ready)();

      if (ready) {
        try {
          ready.call(this, this.fields, this.configuration);
        } catch (e) {
          // eslint-disable-next-line no-console
          console.warn('The ready function is invalid', e, this.configuration.ready);
        }
      }
    }
  },
  created() {
    registerFields(this.configuration && this.configuration.fields);
    bus.$on('updateValue', this.onUpdateValue);
  },
  destroyed() {
    bus.$off('updateValue', this.onUpdateValue);
  }
};
</script>
