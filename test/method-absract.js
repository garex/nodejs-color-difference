var Abstract = require('..').method.EuclideanDistance.super_;

describe('method/Abstract', function() {

  describe('compare', function() {

    it('should throw error when calling directly', function() {

      (function(){
        var abs = new Abstract();
        abs.compare('', '');
      }).should.throwError(/unimplemented/);

    });

  });

});