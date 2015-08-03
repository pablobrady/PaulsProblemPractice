var Node = function(value) {
  var storage = {
    value: value,
    next: null
  }
  return storage;
};

var kth_to_last_node = function(k, a) {
  // Walk thru length once.  Note the length.
    var currNode = a;
    var length = 0;
    while(currNode.next) {
        currNode = currNode.next;
        length++;
    }
    console.log("Linked List Length = " + length);

  currNode = a;
    length = 0;
    while(currNode.next) {
        if(k===length) {
          return currNode.value;
        }
        currNode = currNode.next;
        length++;
    }
}

var a = Node("Angel Food")
var b = Node("Bundt")
var c = Node("Cheese")
var d = Node("Devil's Food")
var e = Node("Eccles")

a.next = b
b.next = c
c.next = d
d.next = e

console.log("Item 2 equals value " + kth_to_last_node(2, a) );
// returns the node with value "Devil's Food" (the 2nd to last node)
