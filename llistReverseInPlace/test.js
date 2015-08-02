var expect = chai.expect;
var should = chai.should();

var myList = new LList();

describe('Linked List Setup (PsuedoClassical)', function() {


  it('LLIST object is not empty after instanciation', function() {
    expect(myList).to.not.equal(null);
  })

  it('HOME NODE object is not empty after first addNode', function() {
    expect( myList ).to.not.equal(null);
  })




  it('NODE HOME VALUE is correctly set to 1', function() { // See "expected" values.
    expect( myList.addNodeValue(1) ).to.equal( 1 );
  })

  it('NODE VALUE is correctly set to 2', function() {
    expect( myList.addNodeValue(2) ).to.equal( 2 );
  })

  it('NODE VALUE is correctly set to 3', function() {
    expect( myList.addNodeValue(3) ).to.equal( 3 );
  })

  it('NODE VALUE is correctly set to 4', function() {
    expect( myList.addNodeValue(4) ).to.equal( 4 );
  })

  it('NODE VALUE is correctly set to 5', function() {
    expect( myList.addNodeValue(5) ).to.equal( 5 );
  })

});

describe('Linked List REVERSED', function() {

  it('REVERSED LList - Node 1 value now is 4', function() {
    myList.showAllNodeValues();
    myList.reverseList();
    myList.showAllNodeValues();
    expect( myList.getNode(1).value ).to.equal( 5 );
  })

});

