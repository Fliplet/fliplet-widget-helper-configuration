import { Field } from '../class/field';

const data = Fliplet.Widget.getData();
const instances = Fliplet.Utils.get(data, 'helperInstances') || Fliplet.Utils.get(data, 'widgetInstances') || [];
const instanceId = Fliplet.Utils.get(data, 'instanceId', '');
let fieldInstances = [];

/**
 * Returns a boolean indicating whether a nested helper instance matches a filter
 * @param {Helper} instance The helper instance
 * @param {Function} predicate The function invoked per iteration
 * @returns {Boolean} Whether the element matches
 */
function helperMatches(instance, predicate) {
  return instance.id !== instanceId
    && instance.isChildren
    && (predicate ? Fliplet.Utils.find([instance], predicate) : true);
}

/**
 * Prepares a predicate filter before it's sent to the various
 * find functions for helpers. This allows a given predicate shorthand
 * to be converted into the suitable filter.
 * @param {Function|String|Object} predicate A filter
 * @return {Function|Object} The prepared predicate
 */
function prepareFilter(predicate) {
  if (typeof predicate === 'string') {
    return { name: predicate };
  }

  return predicate;
}

/**
 * Finds all matching child helpers (through all levels)
 * @param {Function} predicate The function invoked per iteration
 * @returns {Array} The matched helpers
 */
export function findAll(predicate) {
  predicate = prepareFilter(predicate);

  return Fliplet.Utils.filter(instances, function(instance) {
    return helperMatches(instance, predicate);
  });
}

/**
 * Finds a matching child helper (through all levels)
 * @param {Function} predicate The function invoked per iteration
 * @returns {Helper} The matched helper
 */
export function findOne(predicate) {
  predicate = prepareFilter(predicate);

  return Fliplet.Utils.find(instances, function(instance) {
    return helperMatches(instance, predicate);
  });
}

/**
 * Finds matching direct children helpers
 * @param {Function} predicate The function invoked per iteration
 * @returns {Helper} The matched helper
 */
export function findChildren(predicate) {
  predicate = prepareFilter(predicate);

  return Fliplet.Utils.filter(instances, function(instance) {
    return instance.id !== instanceId
      && instance.parentId
      && instance.parentId === instanceId
      && (predicate ? Fliplet.Utils.find([instance], predicate) : true);
  });
}

export function registerFields(fields) {
  if (!fields) {
    return;
  }

  fieldInstances = fields;
}

export function setFieldProperty(fieldName, prop, value) {
  const field = Fliplet.Utils.find(fieldInstances, { name: fieldName });

  if (!field) {
    return;
  }

  field[prop] = value;
}

/**
 * Finds matching helper instances
 * @param {Function} predicate The function invoked per iteration
 * @returns {Array} The matched helpers
 */
Fliplet.Helper.find = function(predicate) {
  // Allow async find for widget instances
  if (typeof data.id === 'number') {
    return Fliplet.API.request({
      url: 'v1/apps/' + Fliplet.Env.get('appId') + '/pages/' + Fliplet.Env.get('pageId') + '/helper-instances'
    }).then(function(response) {
      return Fliplet.Utils.filter(response.helpers, predicate);
    });
  }

  return Fliplet.Utils.filter(instances, prepareFilter(predicate));
};

/**
 * Finds matching helper instances
 * @param {Function} predicate The function invoked per iteration
 * @returns {Helper} The matched helpers
 */
Fliplet.Helper.findOne = function(predicate) {
  // Allow async find for widget instances
  if (typeof data.id === 'number') {
    return Fliplet.Helper.find(predicate).then(function(results) {
      return Fliplet.Utils.first(results);
    });
  }

  return Fliplet.Utils.find(instances, prepareFilter(predicate));
};

Fliplet.Helper.field = function(name) {
  const field = Fliplet.Utils.find(fieldInstances, { name });

  return new Field(field);
};
