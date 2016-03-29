var expect = chai.expect;
var should = chai.should();



describe('Binary Search Test', function() {

  var myList = [1,3,5,9,11,15];

  console.log("myList = ", myList);

  it('Search array for 1', function() {

    var findVal = 1;
    expect( findInList(findVal, myList) ).to.equal(true);

  });
  it('Search array for 3', function() {

    var findVal = 3;
    expect( findInList(findVal, myList) ).to.equal(true);

  });
  it('Search array for 5', function() {

    var findVal = 5;
    expect( findInList(findVal, myList) ).to.equal(true);

  });
  it('Search array for 9', function() {

    var findVal = 9;
    expect( findInList(findVal, myList) ).to.equal(true);

  });
  it('Search array for 11', function() {

    var findVal = 11;
    expect( findInList(findVal, myList) ).to.equal(true);

  });
  it('Search array for 15', function() {

    var findVal = 15;
    expect( findInList(findVal, myList) ).to.equal(true);

  });


  it('Search array for 0', function() {

    var findVal = 0;
    expect( findInList(findVal, myList) ).to.equal(false);

  });
  it('Search array for 16', function() {

    var findVal = 16;
    expect( findInList(findVal, myList) ).to.equal(false);

  });
  it('Search array for 12', function() {

    var findVal = 12;
    expect( findInList(findVal, myList) ).to.equal(false);

  });


});
