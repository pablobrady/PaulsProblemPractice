console.log("2 Stacks.");

// Prototypal Version
// Paul Brady,
// July 17, 2015 - Two Stacks Toy Problem

var QueueManager = function() {
  var obj = Object.create(QueueManager.prototype);
  obj.queue1 = [];
  obj.queue2 = [];
  obj.queue1Len = 0;
  console.log("CONSTRUCTOR -> ", obj.queue1Len);
  return obj;
}

QueueManager.prototype.enqueue = function( value ) {
  this.queue1.push( value );
  this.queue1Len++;
  console.log("ENQUEUE -> queue1Len = " + this.queue1Len + " value = ", value);
};

QueueManager.prototype.dequeue = function() {
  var retVal = null;

  if(!this.queue1Len) return null;

  --this.queue1Len;
  var value = this.queue1[ this.queue1Len ];
  this.queue1.splice( this.queue1Len, 1);

  this.queue2.push(value); // Add to 2nd queue.

  console.log("DEQUEUED/RE-QUEUED -> value = ", value);
  console.log("this.queue1Len = " + this.queue1Len);


  return retVal;
};

QueueManager.prototype.logQueue = function( num ){
  if(num===1)
    console.log("QUEUE 1:  ", this.queue1);
  else if(num===2)
    console.log("QUEUE 2:  ", this.queue2);
};


var qm = QueueManager();
qm.enqueue("FIRST!");
qm.enqueue("SECOND!");
qm.enqueue("THIRD!");
qm.dequeue();
qm.enqueue("DELAYED-FOURTH!");
qm.enqueue("DELAYED-FIFTH!");
qm.dequeue();

qm.dequeue();
qm.dequeue();
qm.dequeue();
qm.dequeue();

console.log("FINAL RESULT:  ");
// console.log("", qm.queue1);
qm.logQueue(1);
qm.logQueue(2);


