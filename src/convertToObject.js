'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = sourceString.split(';');
  const result = {};

  cssProperties.forEach((element) => {
    const [key, value] = element.split(':');

    if (key && value) {
      const trimmedKey = key.trim();
      const trimmedValue = value.trim();

      result[trimmedKey] = trimmedValue;
    }
  });

  return result;
}

module.exports = convertToObject;
