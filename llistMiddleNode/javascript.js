// Linked List, from Scratch.
// But reveal a link to the MIDDLE of the Linked List also.

// PsuedoClassical

var LList = function() {
  this.head = null;
  // this.tail = null;

  this.mCounter = 0;
  this.middle = null;

}

LList.prototype.addNode = function(value) {
  var newNode  = {
    value: value,
    next:  null
  }

  var currNode;

  // Current Node
  if(!this.head) {
    this.head = newNode;
    console.log("addNode:  HEAD ", this.head);
    return;

  } else {
    currNode = this.head;
    while(currNode.next) {
      currNode = currNode.next;
    }
  }

  // AddNode the newNode
  currNode.next = newNode;
  currNode = newNode;
  console.log("addNode:  VALUE ", currNode);
};

var myList = new LList();
myList.addNode(1);
myList.addNode(2);
myList.addNode(3);

