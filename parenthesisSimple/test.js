var expect = chai.expect;
var should = chai.should();

describe('Find the closing parenthesis.', function() {

  it('Closing parenthesis is detected at correct position', function() {
    expect( detectClosingParen(source) ).to.equal( 79 );
  })

});

