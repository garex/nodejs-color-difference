module.exports = compare;

var Color   = require('./color'),
    methods = {
      'EuclideanDistance' : require('./method/euclidean-distance')
    };

/**
 * Compares two colors and returns difference from 1 to 100
 *
 * @param {String|Color} color1
 * @param {String|Color} color2
 * @param {String} method Default method is best from currently implemented
 * @return {Integer} difference
 */
function compare(color1, color2, method) {
  var methodName = method || 'EuclideanDistance';

  if (undefined === methods[methodName]) {
    throw new Error('Method "' + methodName + '" is unknown. See implemented methods in ./lib/method directory.');
  }

  var methodObj = new methods[methodName];

  return methodObj.compare(new Color(color1), new Color(color2));
}

