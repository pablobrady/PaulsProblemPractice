var expect = chai.expect;
var should = chai.should();



describe('Middle Node in a Linked List (PsuedoClassical)', function() {
  
  it('1 should equal 1', function() {
    expect(1).to.equal(1);
  })

  it('2 should be greater than 1', function() {
    expect(2).to.be.greaterThan(1);
  })


  var myList = new LList();

  it('LLIST object is not empty after instanciation', function() {
    expect(myList).to.not.equal(null);
  })



  it('HOME NODE object is not empty after first addNode', function() {
    expect( myList ).to.not.equal(null);
  })

  it('NODE VALUE is correctly set to 1', function() { // See "expected" values.
    expect( myList.addNode(1).value ).to.equal( 1 );
  })

  it('NODE VALUE is correctly set to 2', function() {
    expect( myList.addNode(2).value ).to.equal( 2 );
  })

  it('NODE VALUE is correctly set to 3', function() {
    expect( myList.addNode(3).value ).to.equal( 3 );
  })

  it('NODE VALUE is correctly set to 4', function() {
    expect( myList.addNode(4).value ).to.equal( 4 );
  })

  it('NODE VALUE is correctly set to 5', function() {
    expect( myList.addNode(5).value ).to.equal( 5 );
  })


  it('MIDDLE NODE is correctly set to 3', function() {
    expect( myList.middleNode().value ).to.equal( 3 );
  })


  it('NODE VALUE is correctly set to 6', function() {
    expect( myList.addNode(6).value ).to.equal( 6 );
  })
  it('MIDDLE NODE is correctly set to 4', function() {
    expect( myList.middleNode().value ).to.equal( 4 );
  })
  

  it('NODE VALUE is correctly set to 7', function() {
    expect( myList.addNode(7).value ).to.equal( 7 );
  })
  it('MIDDLE NODE is correctly set to 4', function() {
    expect( myList.middleNode().value ).to.equal( 4 );
  })

});

