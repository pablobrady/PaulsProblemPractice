
// NOTE:  Pseudo-classical
// var Car = function(loc) {
//   this.loc = loc;
// }
// Car.prototype.move = function() {this.loc++;};

// var amy = new Car(1);
// amy.move();
// var ben = new Car(2);
// ben.move();


var Tree = function() {
  this.tree = {};
}

Tree.prototype.contains = function(value) {
  var aTree = this.tree;
  var found = false;
  while(!found && aTree) {
    console.log("CONTAINS:  Checking tree for " + value + "...");

    if( typeof(aTree.value)==="undefined" ) {
      console.log("CONTAINS:  Tree.value *undefined* a this time.");
      return;

    } else if(value < aTree.value) {
      // if the value is less than the current node's value, go left
      aTree = aTree.left;
    } else if(value > aTree.value) {
      // if the value is greater-than than the current node's value, go right
      aTree = aTree.right;
    } else {
      // if the value is equal, found it!
      found=true;
    }
  }
  console.log("CONTAINS:  " + aTree.value + ": " + (found ? "FOUND!" : "Not Found!") + "!");
  return found;
};




Tree.prototype.addChild = function(value) {
  // Search for correct location, then insert it.
  var aNode = {
    value: value,
    left: null,
    right: null
  };

  var currentTree = this.tree;

  if(this.tree.value==null) {
    console.log("ADDCHILD:  Added child " + value + " to root.");
    // special (initial) case
    this.tree.value = value;
    this.tree.left = null;
    this.tree.right = null;
    return;

  } else {

    // Search for insertion point
    while(true) {

      if(value < currentTree.value) {

        if(currentTree.left === null) {
          currentTree.left = aNode; // Left Edge found, add the new node left
          break;
        } else {
          currentTree = currentTree.left;
        }

      } else if(value > currentTree.value) {

        if(currentTree.right === null) {
          currentTree.right = aNode; // Right Edge found, add the new node right
          break;
        } else {
          currentTree = currentTree.right;
        }

      } else {
        // Value already exists!!!
        console.log("ADDCHILD " + value + " ERROR:  Value " + currentTree.value + " already exists.  Skipping...");
        break;
      }

    }

  }
};


var tree = new Tree();
tree.contains(10);
tree.addChild(10);
tree.addChild(1);
tree.addChild(3);
tree.addChild(2);
tree.addChild(5);
tree.addChild(6);
tree.addChild(4);
tree.contains(10);
tree.contains(5);  // Dup
