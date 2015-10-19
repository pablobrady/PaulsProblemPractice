var expect = chai.expect;
var should = chai.should();


describe('Does LinkedList\'s delete_node() function correctly?', function() {

  var alist = LinkedList();
  alist.addNode('A')
  alist.addNode('B');
  alist.addNode('C');


  it('Should have created a LinkedList(), with 3 items.', function() {
    expect( alist.getNode('A').value ).to.equal('A');
    expect( alist.getNode('B').value ).to.equal('B');
    expect( alist.getNode('C').value ).to.equal('C');
  });

  it('Should have deleted item "B".', function() {
    expect( alist.getNode('B').value ).to.equal('B'); // Object B exists.
    alist.delete_node('B');
    expect( alist.getNode('B') ).to.equal(null);      // Object B is gone.
  });

  it('Should have only items "A" and "C" remaining; "B" is null.', function() {
    expect( alist.getNode('A').value ).to.equal('A');
    expect( alist.getNode('B') ).to.equal(null);
    expect( alist.getNode('C').value ).to.equal('C');
  });

});
