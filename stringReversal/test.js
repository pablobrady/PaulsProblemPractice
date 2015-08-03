var expect = chai.expect;
var should = chai.should();


describe('CharArray Reversal in place', function() {

  var testArray = ['a', 'b', 'c', 'd', 'e'];

  it('Original testArray is correct.', function() {
    expect( ['a', 'b', 'c', 'd', 'e'] ).to.eql( ['a', 'b', 'c', 'd', 'e'] );
  })


  it('Reversed testArray result is correct.', function() {
    expect( reverseCharArray(testArray) ).to.eql( ['e', 'd', 'c', 'b', 'a'] );
  })


});

