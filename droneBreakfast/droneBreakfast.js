console.log("Toy Problem:  Find drones that have not returned -- value of 1.");

// Prototypal Version
// Paul Brady,
// July 25, 2015 - Breakfast drone solution
//
// The Problem:  Each breakfast delivery is assigned a unique ID, a positive integer.

var delivery_id_confirmations = [];
  // When on one the company's 100 drones takes off with a delivery,
  // the delivery's ID is added to this array.  When the drone comes back and
  // lands, the ID is again added to the same array.

  // Find the ID that does NOT have a duplicate in the array delivery_id_confirmations.
  // IDs are not in any order.

  // Brute force:  Two nested loops, walk entire array (outer loop).  (Inner loop, search
  // every element again, looking for a duplicate.)

  // Efficient approach:  Walk entire array.
  // Note:  There are 100 elements --> element1 to element100.
  // In an object, store 'elementX = '1' or '2' in object.

// SOLUTION:  Solved in O(n).

// Create some test values.
console.log("T1:  Test Value Creation.");
var tempDuplicates = [];
for (var i = 0; i<100; i++ ) {
  var ran = Math.round(Math.random() * 9); // 0 - 9
  if(ran<9) {
    tempDuplicates.push( i );  // Save duplicate for later.
    //console.log("TEST DATASET CREATION (#" + i + "):  Drone will return.");
  } else {
    console.log("TEST DATASET CREATION (#" + i + "):  Drone will NOT return.");
  }
  delivery_id_confirmations.push(i);
}
console.log("T2:  Adding duplicate records (aka. the drones that have returned). (" + tempDuplicates.length + " records)");
for (var j=0; j<tempDuplicates.length; j++) {
  delivery_id_confirmations.push( tempDuplicates[j] );
}

///////////
console.log("");
console.log("Solving for " + delivery_id_confirmations.length + " records.");
console.log("");


// Efficient Search - add records, remove the duplicate ones.
var deliveryAuditObject = {};
for (var i = 0; i<delivery_id_confirmations.length; i++ ) {
  var droneId = delivery_id_confirmations[i];
  //console.log("checking " + droneId);
  if( typeof deliveryAuditObject[droneId] != 'undefined') {
    delete deliveryAuditObject[droneId]; // delete, drone has returned.
  } else {
    deliveryAuditObject[droneId] = true;
  }
}


// Walk thru deliveryAuditObject, and display the remaining records (unreturned Drone ids)
console.log("SOLUTION:  Drones that have not returned:");
var count = 0;
for(var droneId in deliveryAuditObject) {
  if( typeof deliveryAuditObject[droneId] != 'undefined' ) {
    console.log("DRONE #" + droneId + " has not returned.");
  }
}


