// Reverse a Linked-List in place...

var LList = function() {
  this.home = null;
};

LList.prototype.addNodeValue = function(value) {
  var newNode = {
    value: value,
    next: null
  }

  var currNode;

  if(this.home===null) {
    this.home = newNode;
    console.log("ADDED HOME NODE VALUE:  " + this.home.value);
    return this.home.value;
  } else {
    currNode = this.home;
    while(currNode.next) {
      // Get to last node...
      currNode = currNode.next;
    }
    currNode.next = newNode;
    currNode = newNode;
  }
  console.log("ADDED NODE VALUE:  " + currNode.value);
  return currNode.value;
}

LList.prototype.reverseList = function() {
  if(!this.home || !this.home.next) return;

  var currNode = this.home;
  var futureNode = null;
  var previousNode = null;

  while(currNode) {
    futureNode    = currNode.next;
    currNode.next = previousNode; // da meat
    previousNode  = currNode;
    currNode      = futureNode;
  }
  this.home = previousNode;
  return this.home;
}

LList.prototype.showAllNodeValues = function() {
  var currNode = this.home;
  while(currNode) {
    console.log("showAllNodeValues: " + currNode.value);
    currNode = currNode.next;
  }
}

LList.prototype.getNode = function(nodeNum) {
  if(!this.home) { return null; }
  var currNode = this.home;

  for(var i=1; i<nodeNum; i++) {
    currNode = currNode.next;
  }
console.log("SHOW NODE NUM: " + nodeNum + "; value = " + currNode.value);

  return currNode;
}
