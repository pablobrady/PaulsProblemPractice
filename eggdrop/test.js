var expect = chai.expect;
var should = chai.should();



describe('Build a testable Egg Drop', function() {

  it('Guess are correct more than 30% of the time (in the least amount of guesses)', function() {

    var correctCount = 0;
    var total = 100;
    var secretAnswer;
    for(var i=1; i<=total; i++) {
      secretAnswer = Math.floor(Math.random()*100);
      var g = guessHighestFloor( secretAnswer );
      console.log("(#" + i + ")  Computed Best Guess:  " + g + " (secretAnswer was " + secretAnswer + ")" );
      if(g===secretAnswer) correctCount++;
    }
    console.log("PERCENTAGE OF CORRECT GUESSES (WITH 2 EGGS):  " + (correctCount/total) * 100 + "%" );
    expect(correctCount).to.be.at.least(30);

  })

});
