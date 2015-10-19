// Linked List with Delete - Functional Instantiation

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next  = null;
  return node;
};


var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addNode = function(value) {
    var newNode = Node(value);
    if(list.head === null && list.tail === null) {
      list.head = newNode; // Add first item
    } else {
      list.tail.next = newNode; // Add this node to TAIL.
    }
    list.tail = newNode; // Update the latest tail, to our newNode.

    return newNode;
  };

  list.removeHead = function() {
    var aValue = list.head.value;
    var next   = list.head.next;
    list.head  = next;
    return aValue;
  };

  list.contains = function(searchValue) {
    var tempNode = list.head;
    while(tempNode) {
      if(tempNode.value===searchValue) {
        return true;
      }
      tempNode = tempNode.next;
    }
    return false; // all node.values checked, not found.
  };

  list.getNode = function(searchValue) {
    var tempNode = list.head;
    while(tempNode) {
      if(tempNode.value===searchValue) {
        return tempNode;
      }
      tempNode = tempNode.next;
    }
    return null; // all node.values checked, not found.
  };

  list.delete_node = function(searchValue) {
    var lastTempNode = null;
    var tempNode = list.head;
    while(tempNode) {
      if(tempNode.value===searchValue) {
        console.log("DELETING " + tempNode.value);
        lastTempNode.next = tempNode.next;
        return true;
      }
      lastTempNode = tempNode;
      tempNode = tempNode.next;
    }
    return false; // Unable to delete - not found.
  };


  return list;
};


var llist = LinkedList();
llist.addNode('A')
llist.addNode('B');
llist.addNode('C');
console.log("GetNode 'B' = ", llist.getNode('B'));
llist.delete_node('B');
console.log("GetNode 'B' = ", llist.getNode('B') + " (Should be null/missing)");
console.log("GetNode 'C' = ", llist.getNode('C'));
llist.delete_node('C');
console.log("GetNode 'A' = ", llist.getNode('A').value + " (Should be available.)");
console.log("GetNode 'B' = ", llist.getNode('B') + " (Should be null/missing)");
console.log("GetNode 'C' = ", llist.getNode('C') + " (Should be null/missing)");
