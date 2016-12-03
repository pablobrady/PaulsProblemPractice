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

