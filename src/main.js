import Application from './Application.vue';

// Sample data
if (Fliplet.Env.get('development')) {
  window.__widgetData = {
    'com.fliplet.helper-configuration': {
      assetsUrl:
        'https://d2fx5g1ro9ok5z.cloudfront.net/widgets/com.fliplet.helper-configuration/1.0.0/',
      data: {
        name: 'welcome',
        displayName: 'Welcome',
        supportUrl: 'https://developers.fliplet.com',
        configuration: {
          dependencies: ['tinymce'],
          fields: [
            { name: 'name', type: 'text', label: 'Your name', description: 'This is your name', required: true },
            { name: 'email', type: 'email', label: 'Your email', description: 'This is your email', required: true },
            { name: 'secret', type: 'hidden', label: 'Your secret', required: true },
            { name: 'bio', type: 'textarea', label: 'Bio', description: 'This is your bio', rows: 5, required: true },
            {
              type: 'toggle',
              name: 'darkMode',
              label: 'Turn on Dark Mode',
              description: 'Enable Dark Mode',
              toggleLabel: 'Enable',
              default: false,
              required: true
            },
            { name: 'stocks', type: 'checkbox', label: 'Stocks', description: 'Stocks that you own', options: [
              { value: 'AAPL', label: 'Apple' },
              { value: 'FB', label: 'Facebook' },
              { value: 'GOOGL', label: 'Google' }
            ], required: true },
            { name: 'city', type: 'radio', label: 'City', description: 'Where do you live?', options: [
              'London', 'New York', 'Paris'
            ], required: true },
            {
              name: 'country', type: 'dropdown', label: 'Country', description: 'Which country is that?', options: [
                'France',
                'United Kingdom',
                { value: 'United States', label: 'United States of America' }
              ], required: true
            },
            {
              type: 'provider',
              name: 'files',
              label: 'Open file picker',
              package: 'com.fliplet.file-picker',
              mode: 'full-screen',
              html: '<button class="btn btn-default" data-open-provider>Open</button> You selected {{ value.length }} files'
            },
            {
              name: 'buttons',
              label: 'Buttons',
              type: 'list',
              addLabel: 'Add button',
              headingFieldName: 'title',
              emptyListPlaceholderHtml: '<p>Hello world</p>',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Button title',
                  placeholder: 'Sample button',
                  required: true
                },
                {
                  name: 'showOnLoad',
                  type: 'toggle',
                  label: 'Show on load',
                  toggleLabel: 'Yes'
                },
                {
                  type: 'provider',
                  name: 'action',
                  label: 'Choose an action to do when the button is pressed',
                  package: 'com.fliplet.link'
                }
              ],
              required: true
            }
          ]
        },
        event: 'helper-instance-configure',
        id: 'com.fliplet.helper-configuration',
        package: 'com.fliplet.helper-configuration',
        version: '1.0.0'
      }
    }
  };
}

const data = Fliplet.Widget.getData();

data.fields = data.fields || {};

function initializeInterface() {
  const fields = _.get(data, 'configuration.fields', []);

  if (!fields.length) {
    Fliplet.Modal.alert({ message: 'This helper has not defined a list of fields for the interface.' });

    return Fliplet.Widget.complete();
  }

  if (data.configuration && data.configuration.beforeReady) {
    var beforeReady = typeof data.configuration.beforeReady === 'function'
      ? data.configuration.beforeReady
      : new Function(data.configuration.beforeReady)();

    if (beforeReady) {
      try {
        beforeReady.call(this, data.fields, data.configuration);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('The beforeReady function is invalid', e, data.configuration.beforeReady);
      }
    }
  }

  const fieldData = typeof data.instanceId === 'string' ? data.fields : data;

  fields.forEach((field) => {
    field.value = _.get(fieldData, field.name, field.default);

    if (field.type === 'list') {
      field.value = (field.value || []).map((item) => {
        const list = field.fields;

        list.forEach((listItem) => {
          listItem.value = _.get(item, listItem.name, listItem.default);
        });

        return list;
      });
    }

    // Normalize options
    if (Array.isArray(field.options)) {
      field.options = field.options.map((opt) => {
        if (typeof opt === 'object') {
          return opt;
        }

        return { value: opt };
      });
    }

    if (['checkbox', 'list'].indexOf(field.type) !== -1 && !Array.isArray(field.value)) {
      field.value = [];
    }
  });

  Vue.filter('panelHeading', function(fields, name) {
    const field = _.find(fields, { name }) || _.first(fields);

    return field && (field.value || field.placeholder) || 'New field';
  });

  Vue.directive('sortable', {
    inserted: function(el, binding) {
      if (Sortable) {
        new Sortable(el, binding.value || {});
      }
    }
  });

  return new Vue({
    el: '#helper-configuration',
    render: (createElement) => {
      return createElement(Application);
    }
  });
}

/**
 * Manually initializes the interface.
 * This can be called by a widget interface.js file
 * @param {Object} configuration - The configuration object
 * @returns {Vue} The vue instance of the interface
 */
Fliplet.Helper.generateConfigurationInterface = function(configuration) {
  data.configuration = configuration;

  return initializeInterface();
};

(function() {
  // Do not initialize the UI when it's called from a widget instance
  if (data.uuid) {
    return;
  }

  return initializeInterface();
})();
