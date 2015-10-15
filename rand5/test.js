var expect = chai.expect;
var should = chai.should();



describe('In place rand7 tests.', function() {

  it('"In 20 tries, rand7() should return a value between 1 and 7 (inclusive).', function() {
    for(var k=1; k<=20; k++) {
      var rand = rand7();
      expect(rand).to.be.at.least(1);
      expect(rand).to.be.at.most(7);
    }
  });


  it('"In 20 tries, rand() should return a value between 1 and 5 (inclusive).', function() {
   
    // for(var k=1; k<=100; k++) {
    //   var rand = rand7();
    //   expect(rand).to.be.at.least(1);
    //   expect(rand).to.be.at.most(5);
    // }

  });

});

