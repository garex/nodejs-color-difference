var compare = require('..').compare;

describe('compare', function() {

  it('should compare two colors in hex format and return difference', function() {

    compare('#ffffff', '#ffffff').should.be.equal(0);
    compare('#ffffff', '#000000').should.be.approximately(100, 0.3);
    compare('#ffffff', '#7f7f7f').should.be.approximately( 46, 1);
    compare('#000000', '#808080').should.be.approximately( 53, 0.7);
    compare('#7f7f7f', '#808080').should.be.approximately(  0, 0.5);

  });

  it('should return difference from 1 to 100', function() {

    compare('fff', 'fff').should.be.within(0, 100);
    compare('000', '000').should.be.within(0, 100);
    compare('fff', '000').should.be.within(0, 100);
    compare('fff', '808080').should.be.within(0, 100);
    compare('000', '808080').should.be.within(0, 100);

  });

  it('can compare colors by implemented methods', function() {

    (function(){
      compare('', '', 'wtf');
    }).should.throwError(/unknown/);

    (function(){
      compare('fff', 'ccc');
      compare('fff', 'ccc', 'EuclideanDistance');
      compare('fff', '#ffffff', 'EuclideanDistance');
      compare('fff', 'ccc', 'CIE76Difference');
    }).should.not.throwError();

  });

});