var counter = (function() {

  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();
console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1


/// ========= ///


var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log("COUNTER1 Value:" + counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
console.log("COUNTER1 Value:" + counter1.value()); /* Alerts 2 */
counter1.decrement();
console.log("COUNTER1 Value:" + counter1.value()); /* Alerts 1 */
console.log("COUNTER2 Value:" + counter2.value()); /* Alerts 0 */
