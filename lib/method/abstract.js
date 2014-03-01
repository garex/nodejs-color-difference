module.exports = Abstract;

function Abstract() {
}

/**
 * Compares two colors and returns difference from 1 to 100
 *
 * @param {String|Color} color1
 * @param {String|Color} color2
 * @return {Integer} difference
 */
Abstract.prototype.compare = function(color1, color2) {
  throw new Error('Compare method unimplemented!');
}
