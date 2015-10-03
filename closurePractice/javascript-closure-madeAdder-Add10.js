/*

// Make a function that returns a closure function.

function myModule(xAge) {
  var name = "tim", age = xAge;

  return {
    greetMe: function greetMe() {
      var name = "Paul";  var age = 49;
      return "Hello " + name + ".  Wow, you are " + age + " years old!";
    },
    greet:  function greet() {
      return "Hello " + name + ".  Wow, you are " + age + " years old!";
    }
  };
}
// call `myModule` to get a closure out of it.
var greeter = myModule(30);
// Call the closure
console.log( greeter.greetMe() );
console.log( greeter.greet() );

var yoTuna = greeter.greetMe;

var goGrrl = function(){
  var name = "Tuna";
  var age = 2;
  console.log( "BING@! " + yoTuna() );
  return yoTuna;
};

console.log( "FINAL: " + greeter.greetMe() );

*/



// ADDER CLOSURE EXAMPLE

var madeAdder = function( x ) {

  return function inner( y ) {
    return x + y;
  }

}

var add10 = madeAdder(10);
var add20 = madeAdder(20);

console.log( "10 + 5 = " + add10(5) );
console.log( "20 + 5 = " + add20(5) );

console.log("makeAdder / add10 / add20 - COMPLETED!");


// --- //


var makeAdder = function( x ) {

  return function inner ( y ) {
    return x + y;
  }

}


var add10 = makeAdder(10);
var add20 = makeAdder(20);

console.log( add10(1) );
console.log( add20(1) );

 


// --- //
// [].forEach( callback ); Example
var myArr = [10, 20, 30];

function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

myArr.forEach( logArrayElements );




// --- //
// Instantiation Quirks 1a
// If we initialize the INSTANCE with *new*, then myInstance has access to this.title outside the method.

console.log("TEST AREA 51:");

var myClass = function () {
  this.title = 'Class title';
}
var myInstance = new myClass();

console.log("   myClass.title = " + myClass.title);
console.log("myInstance.title = " + myInstance.title);



// --- // 
// Instantiation Quirks 1b
console.log("TEST AREA 52:");
var makerClass = function( x ) {
  this.yo = "Mamma!";
  // return function inner( y ) {  -- When "return" returns nothing, this.yo becomes visible!!!
  //   return x + y;
  // }
}
var instance = new makerClass();

console.log("instance.yo = " + instance.yo);





