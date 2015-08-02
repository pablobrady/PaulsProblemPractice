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

LList.prototype.middleNode = function() {
  if(!this.head) return null;

  var counter = 0;
  var mCounter = 0;

  var currNode = this.head;
  var midNode  = this.head;
  while(currNode) {
    currNode = currNode.next;
    counter++;

    if(counter%2 === 0) {
      midNode = midNode.next;
      mCounter++;
    }
  }

  return midNode;
};

var myList = new LList();
myList.addNode(1);
myList.addNode(2);
myList.addNode(3);
myList.addNode(4);
myList.addNode(5);
console.log("MID NODE:  ", myList.middleNode());

myList.addNode(6);
console.log("MID NODE:  ", myList.middleNode());

myList.addNode(7);
console.log("MID NODE:  ", myList.middleNode());




