module.exports = (function() { return Abstract; })();

function Abstract() {
};

/**
 * Compares two colors and returns difference from 1 to 100
 *
 * @param {Rgb} color1
 * @param {Rgb} color2
 * @return {Number} difference
 */
Abstract.prototype.compare = function(color1, color2) {
  throw new Error('Compare method unimplemented!');
};
