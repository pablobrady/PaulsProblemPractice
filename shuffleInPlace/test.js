var expect = chai.expect;
var should = chai.should();



describe('In place "Shuffler" tests.', function() {

  var testArray = [1, 2, 3, 4, 5];
  var testV1 = new Shuffler( testArray );

  it('"In 20 tries, get_random_index() should return a value between CEILING and FLOOR (inclusive).', function() {
    for(var k=1; k<=20; k++) {
      var rand = testV1.get_random_index(0, 4);
      expect(rand).to.be.at.least(0);
      expect(rand).to.be.at.most(4);
    }
  });

  it('"Should return 5 ints.', function() {
    var result = testV1.shuffleInPlace( testArray )
    console.log( "Mocha TEST:  Result is " + result);
    console.log( "Mocha TEST:  Result.Length is " + result.length);
    expect(5).to.equal(result.length);
  });

});

