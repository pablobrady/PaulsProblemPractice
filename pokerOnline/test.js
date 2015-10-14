var expect = chai.expect;
var should = chai.should();


describe('Are these conditions detected?', function() {

  var tests = [
    {
      "shuffled_deck" : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      "half1" : [1, 3, 5, 7, 9],
      "half2" : [2, 4, 6, 8, 10],
      "result" : true,
      "description" : "PERFECT SHUFFLE"
    },
    {
      "shuffled_deck" : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      "half1" : [3, 5, 7, 9, 1],   // 1st out of order
      "half2" : [2, 4, 6, 8, 10],
      "result" : false,
      "description" : "HALF1 IS OUT OF ORDER"
    },
    {
      "shuffled_deck" : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      "half1" : [1, 3, 5, 7, 9],
      "half2" : [4, 2, 6, 8, 10],  // 1st out of order
      "result" : false,
      "description" : "HALF2 IS OUT OF ORDER"
    },
    {
      "shuffled_deck" : [1, 2, 3, 4, 5],  // Shuffled_deck too short
      "half1" : [1, 3, 5, 7, 9],
      "half2" : [2, 4, 6, 8, 10],
      "result" : false,
      "description" : "SHUFFLED DECK IS TOO SHORT"
    },
    {
      "shuffled_deck" : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],  // Shuffled_deck too long
      "half1" : [1, 3, 5, 7, 9],
      "half2" : [2, 4, 6, 8, 10],
      "result" : false,
      "description" : "SHUFFLED DECK IS TOO LONG"
    },
    {
      "shuffled_deck" : [10, 1, 9, 3, 8, 5, 6, 4, 7, 2],
      "half1" : [10, 3, 8, 4, 7],
      "half2" : [1,  9, 5, 6, 2],
      "result" : true,
      "description" : "SHUFFLE IN RANDOM ORDER, TWO CARDS PER HALF"
    },
    {
      "shuffled_deck" : [10, 1, 9, 3, 8, 5, 6, 4, 7, 2],
      "half1" : [10, 1, 9, 3, 8],
      "half2" : [5,  6, 4, 7, 2],
      "result" : true,
      "description" : "ALL HALF1, THEN ALL HALF2"
    }
  ];

  var count = 0;
  tests.forEach(function(test){
    count++;

    it('should detected a valid shuffled_deck - (test #' + count + ': ' + test.description + ',  Result: ' + test.result + ')', function() {
      console.log("count = " + count);
      console.log("result = " + test.result);
      expect( ( test.result ) ).to.equal( checkTheShuffledDeck(test.shuffled_deck, test.half1, test.half2) );
    })

  });

});
