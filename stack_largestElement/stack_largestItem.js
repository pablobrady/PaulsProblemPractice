console.log("stack_largestItem.js");

// Prototypal Version
// Paul Brady,
// July 23, 2015 - Basic 1 STACK, with a get_largest() function.
//
// Solution is in O(1) time.

var StackManager = function() {
  var obj = Object.create(StackManager.prototype);
  obj.stack1 = [];
  obj.stack1Len = 0;

  obj.largestElement = [-1];

  return obj;
}

StackManager.prototype.push = function( value ) {
  this.stack1[this.stack1Len++] = value;
  
  if(this.largestElement.length>0 && value>this.largestElement[this.largestElement.length-1]) {
    this.largestElement.push(value);
    // console.log("LARGEST ELEMENT IS NOW " + value);
  }

  console.log("PUSH -> stack1Len = " + this.stack1Len + "; value = ", value + "; largest element: " + this.largestElement[this.largestElement.length-1]);
};

StackManager.prototype.pop = function() {
  var retVal = null;

  if(!this.stack1Len) return null;

  --this.stack1Len;
  var value = this.stack1[ this.stack1Len ];
  this.stack1.splice( this.stack1Len, 1);
  console.log("POP -> " + value );

  this.largestElement.pop()

  return retVal;
};

StackManager.prototype.peek = function(){
  if(this.stack1.length<=0) return null;

  return this.stack1[ this.stack1.length-1 ];
};

StackManager.prototype.logQueue = function( num ){
  if(num===1)
    console.log("ENTIRE QUEUE:  ", this.stack1);
};

StackManager.prototype.get_largest = function() {
  console.log("this.largestElement[] = ", this.largestElement);
  if(this.largestElement.length>0) 
    return this.largestElement[this.largestElement.length-1];
  else 
    return null;
};

////////



var sm = StackManager();
sm.push(1);
sm.push(20);
sm.push(40);
sm.push(3);
sm.pop();
sm.push(4);
console.log("PEEK AT STACK END VALUE: " + sm.peek() );

// console.log("", ms.stack1);
sm.logQueue(1);

console.log("LARGEST(!): " + sm.get_largest() );



