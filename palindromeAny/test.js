var expect = chai.expect;
var should = chai.should();


describe('Is (test string) a Palindrome?', function() {

  var tests = [
    {string: "civic", result: true},
    {string: "civvic", result: true},
    {string: "cAvic", result: false},
    {string: "civBic", result: false},
  ];

  var count = 0;
  tests.forEach(function(test){
    count++;

    it('Test string:  ' + test.string + " is " + test.result, function() {
      expect( isPalindrome( test.string ) ).to.equal( test.result );
    })

  });

});



describe('Is any permutation of (test string) a Palindrome?', function() {

  var tests = [
    {string: "civic", result: true},
    {string: "ivicc", result: true},
    {string: "civil", result: false},
    {string: "livci", result: false},
    {string: "civvic", result: true},
    {string: "ivvicc", result: true},
    {string: "civbil", result: false},
    {string: "livcvb", result: false},
  ];

  var count = 0;
  tests.forEach(function(test){
    count++;

    it('Test string:  ' + test.string + " is " + test.result, function() {
      expect( isAnyPermutationAPalindrome( test.string ) ).to.equal( test.result );
    })

  });

});

