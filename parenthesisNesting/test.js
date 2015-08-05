var expect = chai.expect;
var should = chai.should();



describe('areParensBalanced()', function() {


  var tests = [
    {string: "{ [ ] ( ) }", result: true},
    {string: "{ [ ( ] ) }", result: false},
    {string: "{ [ }",       result: false}
  ];

  var count = 0;
  tests.forEach(function(test){
    count++;
    it('Correctly detects string #' + count + " \'"+ test.string +"\' as " + test.result.toString().toUpperCase() +".", function() {
      expect( areParensBalanced( test.string ) ).to.equal( test.result );
    })
  });

});
