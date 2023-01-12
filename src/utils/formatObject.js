import _ from 'lodash';

export const fKeyTocamel = (obj) =>
  _.transform(obj, (acc, value, key, target) => {
    const camelKey = _.isArray(target) ? key : _.camelCase(key);

    acc[camelKey] = _.isObject(value) ? fKeyTocamel(value) : value;
  });
