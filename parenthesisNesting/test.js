var expect = chai.expect;
var should = chai.should();



describe('Middle Node in a Linked List (PsuedoClassical)', function() {

  it('Test 1 should equal "'+testStrings[0][1]+'"', function() {
    expect( areParensBalanced( testStrings[0][0] ) ).to.equal( testStrings[0][1] );
  })

  it('Test 2 should equal "'+testStrings[1][1]+'"', function() {
    expect( areParensBalanced( testStrings[1][0] ) ).to.equal( testStrings[1][1] );
  })

  it('Test 3 should equal "'+testStrings[2][1]+'"', function() {
    expect( areParensBalanced( testStrings[2][0] ) ).to.equal( testStrings[2][1] );
  })

});

