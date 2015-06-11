var intArray = [2,4,6,-12,-10,8]; 
var highest_product = 0;

// Sort Array
var sortNumber = function(a,b) {
    return a - b; 
};
intArray.sort(sortNumber);
console.log( "Sorted: " + intArray );

// Highest Product
var len = intArray.length;

var h1 = intArray[len-1] * intArray[len-2] * intArray[len-3];
var h2 = intArray[0] * intArray[1] * intArray[len-1];
console.log(intArray[len-1] + " * " + intArray[len-2] + " * " + intArray[len-3] + " = " + h1);
console.log(intArray[0] + " * " + intArray[1] + " * " + intArray[len-1] + " = " + h2);

highest_product = Math.max(h1, h2);

console.log( "Answer: " + highest_product );
