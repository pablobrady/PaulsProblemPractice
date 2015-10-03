var wordStr = "After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar. And such...";

var buildWordCloud = function ( aString ) {
  var retVal = "";

  var re = /['.',',',':']/g;
  var tempStr = aString.replace(re, '').toLowerCase(); // Regex.toLowerCase()
  var wordArray = tempStr.split(' ');

  var wordObj = {};

  // Count the word occurances
  var maxCount = 0;
  for(var i=0; i<wordArray.length; i++){
    var wordStr = wordArray[i];
    wordObj[ wordStr ] = (wordObj[ wordStr ]) ? ++wordObj[wordStr] : 1;

    maxCount = (wordObj[wordStr] > maxCount) ? wordObj[wordStr] : maxCount;
    // console.log("Word = " + wordStr + " --- count = " + wordObj[ wordStr ] );
  }
  console.log("maxCount = " + maxCount);

  // Populate the output (reading the workObj this time...)
  for(var element in wordObj) {
    var count = wordObj[element];
    if(count>6) count=6;
    var hCount = maxCount - count;

    console.log("VALUE " + element + " COUNT: " + count );
    var newWord = "<h" + hCount + ">" + element + "</h" + hCount + ">";
    retVal = retVal.concat( newWord );
  }
  console.log("retVal = " + retVal);

  return retVal;
};


var output = buildWordCloud( wordStr );

console.log("output:  " + output);

document.getElementById('out').innerHTML = output;
