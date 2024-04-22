<template>
  <validation-provider :rules="validationRules" v-slot="{ errors }" :vid="name" ref="provider">
    <div
      v-show="(typeof show === 'undefined' || show)"
      :class="[
        'form-group clearfix',
        {
          'has-error': errors.length
        }
      ]"
      :data-field="name"
      :data-type="type">
      <input v-if="type === 'hidden'" type="hidden" v-model="value" />
      <template v-else>
        <div class="col-sm-4 control-label">
          <label v-if="label">{{ label }}</label>
          <p v-if="description" class="help-block" v-html="description"></p>
        </div>
        <div class="col-sm-8">
          <div v-if="type === 'list' && panelIsVisible" class="list-field">
            <div class="panel-group ui-sortable">
              <div v-sortable="sortableOptions">
                <div class="panel panel-default" v-bind:key="index" v-for="(fieldList, index) in value">
                  <validation-observer v-slot="{ failed }">
                    <div :class="[ 'panel-wrapper', { 'has-error': failed } ]">
                      <div class="panel-heading ui-sortable-handle">
                        <h4 class="panel-title" data-toggle="collapse">
                          <div class="screen-reorder-handle">
                            <i class="fa fa-ellipsis-v"></i><i class="fa fa-ellipsis-v"></i>
                          </div>
                          <span v-on:click.prevent="onToggleAccordion" class="fa fa-chevron-right chevron"></span>
                          <span v-on:click.prevent="onToggleAccordion" class="panel-title-text">{{ fieldList | panelHeading(headingFieldName) }}</span>
                        </h4>
                        <a href="#" v-on:click.prevent="onDeleteItem(index)"><span class="icon-delete fa fa-trash"></span></a>
                      </div>
                      <div class="panel-collapse collapse">
                        <div class="panel-body">
                          <div class="form">
                            <div>
                              <template v-for="field in fieldList">
                                <field ref="fieldInstances" v-bind="field" v-bind:key="field.name" v-bind:list-name="name" v-bind:index="index"></field>
                              </template>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </validation-observer>
                </div>
              </div>
            </div>
            <div v-if="!value || !value.length" v-html="emptyListPlaceholderHtml"></div>
            <p>
              <a class="btn btn-default" v-on:click.prevent="addItem" href="#">{{ addLabel || 'Add' }}</a>
              <a v-if="value && value.length" class="btn btn-link expand-items" v-on:click.prevent="onToggleAccordions" href="#">Expand/Collapse All</a>
            </p>
          </div>
          <input v-if="type === 'text'" type="text" class="form-control" v-model="value" :placeholder="placeholder">
          <input v-if="type === 'email'" type="email" class="form-control" v-model="value" :placeholder="placeholder">
          <textarea v-if="type === 'textarea'" class="form-control" v-model="value" :placeholder="placeholder" :rows="rows || 4"></textarea>
          <template v-if="options && type === 'radio'">
            <div v-bind:key="optionIndex" v-for="(option, optionIndex) in options" class="radio radio-icon">
              <input :name="fieldName" :id="fieldName + '_' + optionIndex" type="radio" :value="option.value" v-model="value">
              <label :for="fieldName + '_' + optionIndex">
                <span class="check"><i class="fa fa-circle"></i></span>
                <span v-if="option.label" v-html="option.label"></span>
                <template v-else>{{ option.value }}</template>
              </label>
            </div>
          </template>
          <template v-if="options && type === 'checkbox'">
            <div v-bind:key="optionIndex" v-for="(option, optionIndex) in options" class="checkbox checkbox-icon">
              <input :name="fieldName" :id="fieldName + '_' + optionIndex" type="checkbox" :value="option.value" v-model="value">
              <label :for="fieldName + '_' + optionIndex">
                <span class="check"><i class="fa fa-check"></i></span>
                <span v-if="option.label" v-html="option.label"></span>
                <template v-else>{{ option.value }}</template>
              </label>
            </div>
          </template>
          <template v-if="options && type === 'dropdown'">
            <label :for="fieldName" class="select-proxy-display">
              <select :id="fieldName" class="hidden-select form-control" v-model="value">
                <option value="" v-if="typeof placeholder === 'string'" :disabled="required && typeof placeholder === 'string'">{{ placeholder }}</option>
                <option value="" v-else-if="placeholder !== false">-- Select an option</option>
                <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label || option.value }}</option>
              </select>
              <span class="icon fa fa-chevron-down"></span>
            </label>
          </template>
          <template v-if="type === 'toggle'">
            <div class="checkbox checkbox-icon">
              <input :name="fieldName" :id="fieldName" type="checkbox" value="true" v-model="value">
              <label :for="fieldName">
                <span class="check"><i class="fa fa-check"></i></span> <span v-html="toggleLabel"></span>
              </label>
            </div>
          </template>
          <template v-if="!isFullScreenProvider">
            <div v-if="html" v-html="html"></div>
          </template>
          <div v-if="type === 'provider'" class="provider">
            <template v-if="isFullScreenProvider">
              <div v-html="providerHtml"></div>
            </template>
          </div>
          <div class="help-block" v-if="warning">
            <div class="alert alert-warning" v-html="warning"></div>
          </div>
          <div class="help-block" v-if="errors && errors.length">
            <div class="alert alert-danger">{{ errors[0] }}</div>
          </div>
        </div>
      </template>
    </div>
  </validation-provider>
</template>

<script>
import bus from '../libs/bus';
import { findAll, findOne, findChildren, setFieldProperty } from '../libs/lookups';

VeeValidate.extend('required', {
  validate(value) {
    let valid;

    if (typeof value === 'undefined' || value === null) {
      valid = false;
    } else if (typeof value === 'number') {
      valid = !isNaN(value);
    } else if (typeof value === 'boolean') {
      valid = !!value;
    } else if (Array.isArray(value) || typeof value === 'string') {
      valid = value.length;
    } else if (typeof value === 'object') {
      valid = !_.isEmpty(value);
    } else {
      valid = !!value;
    }

    return {
      required: true,
      valid
    };
  },
  computesRequired: true,
  message: 'This field is required'
});
export default {
  name: 'field',
  components: {
    validationProvider: VeeValidate.ValidationProvider,
    validationObserver: VeeValidate.ValidationObserver
  },
  data() {
    return {
      eventsBound: false,
      provider: undefined,
      providerPromise: undefined,
      panelIsVisible: true,
      isFullScreenProvider: this.type === 'provider' && this.mode === 'full-screen',
      sortableOptions: {
        group: {
          name: 'fields',
          pull: false
        },
        onStart: this.onStart,
        onEnd: this.onEnd,
        onUpdate: this.onSort,
        handle: '.screen-reorder-handle'
      }
    };
  },
  props: [
    'type',
    'name',
    'listName',
    'label',
    'html',
    'value',
    'ready',
    'change',
    'warning',
    'placeholder',
    'default',
    'description',
    'required',
    'rows',
    'options',
    'toggleLabel',
    'package',
    'onEvent',
    'fields',
    'addLabel',
    'index',
    'mode',
    'show',
    'headingFieldName',
    'emptyListPlaceholderHtml',
    'rules',
    'validate',
    'data',
    'beforeSave'
  ],
  computed: {
    providerHtml() {
      return Handlebars.compile(this.html)(this);
    },
    fieldName() {
      return this.listName ? `${this.listName}_${this.index}_${this.name}` : this.name;
    },
    validationRules() {
      // Hidden fields don't need validation
      if ((typeof this.show !== 'undefined' && !this.show) || this.type === 'hidden') {
        return {};
      }

      const rules = {};

      // Set "required" rule
      if (this.required) {
        rules.required = true;
      }

      // Parse rules property to support all the rules supported by vee-validate using object expression
      // https://vee-validate.logaretm.com/v3/advanced/rules-object-expression.html#defining-rules
      if (typeof this.rules === 'object' && !_.isEmpty(this.rules)) {
        _.assign(rules, this.rules);
      }

      // Use custom validate function as custom validation rule
      // https://vee-validate.logaretm.com/v3/guide/basics.html#rule-arguments
      if (this.validate) {
        const name = `validate-${this.fieldName}`;
        const validate = new Function(this.validate)();

        VeeValidate.extend(name, validate);
        rules[name] = true;
      }

      return rules;
    },
    $parentList() {
      if (this.listName) {
        return this.$parent.$parent.$parent;
      }
    }
  },
  watch: {
    value(newValue, oldValue) {
      // This field is used in a list
      if (this.listName) {
        _.find(this.$parentList.value[this.index], { name: this.name }).value = newValue;

        this.$parentList.onListValueChanged(this.name);

        this.onValueChange(newValue, oldValue);

        return;
      }

      this.updateParentValue(newValue);

      // Ensure model-less values are manually validated after change
      if (this.type === 'list') {
        this.$refs.provider.validate(newValue);
      }

      this.onValueChange(newValue, oldValue);
    }
  },
  methods: {
    // Methods can be used when the Vue instance is passed as context for
    // the change and ready callback functions
    find: findAll,
    findOne: findOne,
    children: findChildren,
    setFieldProperty: setFieldProperty,
    val(newValue) {
      if (typeof newValue !== 'undefined') {
        this.$set(this, 'value', newValue);

        return;
      }

      return this.value;
    },
    updateParentValue(value) {
      bus.$emit('updateValue', this.name, value);
    },
    onListValueChanged(name) {
      if (name === this.headingFieldName) {
        this.$forceUpdate();
      }
    },
    onValueChange(newValue, oldValue) {
      if (!this.change) {
        return;
      }

      const change = typeof this.change === 'function'
        ? this.change
        : new Function(this.change)();

      change.call(this, newValue, oldValue);
    },
    async onSubmit() {
      if (this.type === 'list' && this.$refs.fieldInstances) {
        await Promise.all(this.$refs.fieldInstances.map((field) => {
          return field.onSubmit().then((result) => {
            _.find(this.value[field.index], { name: field.name }).value = result;
          });
        }));

        const newValue = this.value.map((fields) => {
          const obj = {};

          fields.forEach((field) => {
            if (field.show === false) {
              return;
            }

            obj[field.name] = typeof field.value !== 'undefined' ? field.value : field.default;
          });

          return obj;
        });

        this.$parent.$parent.fields[this.name] = newValue;
      }

      if (!this.providerPromise) {
        return Promise.resolve(this.show !== false ? this.value: null);
      }

      this.provider.forwardSaveRequest();

      return this.providerPromise;
    },
    collapseAccordions($context) {
      $context.find(':not(.panel-group) .panel-collapse').collapse('hide');
      $context.find(':not(.panel-group) .panel-heading .fa-chevron-down').addClass('fa-chevron-right').removeClass('fa-chevron-down');
    },
    expandAccordions($context) {
      $context.find(':not(.panel-group) .panel-collapse').collapse('show');
      $context.find(':not(.panel-group) .panel-heading .fa-chevron-right').addClass('fa-chevron-down').removeClass('fa-chevron-right');
    },
    allAccordionsCollapsed($context) {
      return !$context.find(':not(.panel-group) .panel-heading .fa-chevron-down').length;
    },
    toggleAccordionByIndex(index) {
      this.toggleAccordion(this.$el.querySelectorAll('.panel-heading')[index]?.querySelector('.panel-title-text'));
    },
    scrollToAccordionByIndex(index) {
      const $accordion = $(this.$el.querySelectorAll('.panel-heading')[index]);

      if (!$accordion.length) {
        return;
      }

      $('html, body').stop().animate({
        scrollTop: $accordion.offset().top
      }, {
        duration: 200
      });
    },
    toggleAccordion(target) {
      const $target = $(target).parent().find('.chevron');
      const isExpanded = $target.hasClass('fa-chevron-down');
      const $field = $(target).closest('.list-field');

      // Close other items
      this.collapseAccordions($field);

      if (!isExpanded) {
        // Expand this item
        $target.closest('.panel').find('.panel-collapse').collapse('show');
        $target.addClass('fa-chevron-down').removeClass('fa-chevron-right');

        this.scrollToAccordionByIndex($field.find('.panel-heading').index($target.closest('.panel-heading')));
      }
    },
    onToggleAccordion(event) {
      this.toggleAccordion(event.target);
    },
    onToggleAccordions(event) {
      const $field = $(event.target).closest('.list-field');

      if (this.allAccordionsCollapsed($field)) {
        this.expandAccordions($field);
      } else {
        this.collapseAccordions($field);
      }
    },
    onDeleteItem(index) {
      this.value.splice(index, 1);
    },
    addItem() {
      if (!Array.isArray(this.value)) {
        this.$set(this, 'value', []);
      }

      const item = _.cloneDeep(this.fields);

      this.value.push(item);

      this.$nextTick(() => {
        this.toggleAccordionByIndex(this.value.length - 1);
        this.scrollToAccordionByIndex(this.value.length - 1);
      });
    },
    onStart(event) {
      this.collapseAccordions($(event.target));
      this.onSubmit();
    },
    onEnd() {
      Promise.all(this.$refs.fieldInstances.map((field) => {
        field.initProvider();
      }));
    },
    onSort(event) {
      // Briefly hide the sortable panel to fix this issue
      // https://github.com/sagalbot/vue-sortable/issues/27#issuecomment-350014812
      this.panelIsVisible = false;

      this.value.splice(event.newIndex, 0, this.value.splice(event.oldIndex, 1)[0]);

      this.$nextTick(() => {
        this.panelIsVisible = true;
      });
    },
    initProvider() {
      if (this.type !== 'provider') {
        return;
      }

      if (!this.package) {
        throw new Error('Package is required');
      }

      const $provider = $(this.$el).find('.provider');

      if (this.isFullScreenProvider) {
        if (this.eventsBound) {
          return;
        }

        $provider.find('[data-open-provider]').click((event) => {
          event.preventDefault();
          this.openProvider();
          Fliplet.Widget.setSaveButtonLabel('Save');
          window.currentProvider = this.provider;
        });

        this.eventsBound = true;

        return;
      }

      this.openProvider($provider);
    },
    openProvider(target) {
      let value = this.value || {};
      let data = typeof this.data === 'function'
        ? this.data.bind(this).call(this, value)
        : this.data;

      // File picker wants a slightly different input from the original output
      if (this.package === 'com.fliplet.file-picker' && Array.isArray(value)) {
        value = { selectFiles: value };
      } else if (this.package === 'com.fliplet.data-source-provider') {
        // Apply default values to ensure data sources and security rules are correctly managed
        value = _.assignIn({ appId: Fliplet.Env.get('appId') }, this.default, value);

        // Data source provider wants a slightly different input from the original output
        if (value.id) {
          value.dataSourceId = value.id;
        }
      }

      let onEvent;

      if (this.onEvent) {
        onEvent = typeof this.onEvent === 'function'
          ? this.onEvent
          : new Function(this.onEvent)();
      }

      if (!('data' in this)) {
        data = typeof value === 'object'
          // Normalize Vue objects into plain JSON objects
          ? JSON.parse(JSON.stringify(value))
          : value;
      }

      this.provider = Fliplet.Widget.open(this.package, {
        selector: target?.[0],
        data,
        onEvent
      });

      // Set provider property against the field
      this.setFieldProperty(this.name, 'provider', this.provider);

      this.providerPromise = new Promise((resolve) => {
        this.provider.then((result) => {
          let value;

          if (_.isObject(result.data) && !Array.isArray(result.data)) {
            value = _.omit(result.data, [
              'package', 'version'
            ]);
          } else {
            value = result.data;
          }

          let beforeSave;

          if (typeof this.beforeSave === 'function') {
            beforeSave = this.beforeSave.bind(this).call(this, value);
          } else {
            beforeSave = Promise.resolve(value);
          }

          Promise.resolve(beforeSave).then((result) => {
            this.$set(this, 'value', result);

            if (this.isFullScreenProvider) {
              delete window.currentProvider;
              delete this.provider;

              this.setFieldProperty(this.name, 'provider', null);
              this.providerPromise = undefined;

              Fliplet.Widget.resetSaveButtonLabel();

              this.initProvider();
            }

            resolve(this.show !== false ? this.value : undefined);
          });
        });
      });
    },
    normalizeOptions() {
      if (['radio', 'checkbox', 'dropdown'].indexOf(this.type) > -1) {
        _.forEach(this.options, (option, i) => {
          if (typeof option !== 'object') {
            this.options[i] = {
              value: option
            };
          }
        });
      }
    }
  },
  mounted() {
    this.initProvider();
    this.normalizeOptions();

    const waitForAccordion = new Promise(resolve => {
      if (!this.listName) {
        return resolve();
      }

      // Wait for accordion to be initialized
      setTimeout(() => {
        resolve();
      }, 100);
    });

    // Ensure model-less values are synced with the validation provider
    if (this.type === 'list') {
      this.$refs.provider.syncValue(this.value);
    } else if (['dropdown', 'radio'].includes(this.type) && typeof this.value === 'undefined') {
      return waitForAccordion.then(() => {
        this.$set(this, 'value', this.default || '');
      });
    } else if (this.type === 'checkbox' && !Array.isArray(this.value)) {
      return waitForAccordion.then(() => {
        this.$set(this, 'value', _.compact([this.value]));
      });
    }

    if (this.ready) {
      const ready = typeof this.ready === 'function'
        ? this.ready
        : new Function(this.ready)();

      ready.call(this, this.$el, this.value, this.provider);
    }

    // This field is used in a list
    if (!this.listName) {
      this.updateParentValue(this.value);
    }
  }
};
</script>
