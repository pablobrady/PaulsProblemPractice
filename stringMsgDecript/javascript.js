var message = [
    'f','i','n','d',' ',
    'y','o','u',' ',
    'w','i','l','l',' ',
    'p','a','i','n',' ',
    'o','n','l','y',' ',
    'g','o',' ',
    'y','o','u',' ',
    'r','e','c','o','r','d','i','n','g','s',' ',
    's','e','c','u','r','i','t','y',' ',
    't','h','e',' ',
    'i','n','t','o',' ',
    'i','f'
];
var reverse_words = function(msg) {
    // Detect words forwards, copying (as strings) to an output array.
    var arrayLen = msg.length;
    var outputStrings = [];
    var wordStart = 0;
    var wordLen = 0;
    var temp = '';
    for(var i=0; i<=arrayLen; i++){
        wordLen++;
        if(msg[i]==' ' || i==arrayLen) {
           temp = msg.slice(wordStart, wordStart+wordLen-1).join("")
           // console.log("temp = '" + temp + "'");
           outputStrings.push( temp );
           //console.log("start,len = " + wordStart + ", " + wordLen);
           wordStart = i + 1;
           wordLen=0;
        } else {
            // console.log("msg["+i+"]="+msg[i]);
        }
    }

    // Swap the word strings, in-place
    console.log(outputStrings);
    var oLen = outputStrings.length;
    for(var k=0; k<Math.round(oLen/2); k++){
        // Swap words in place
        var t = outputStrings[oLen - k];
        outputStrings[oLen - k] = outputStrings[k];
        outputStrings[k] = t;
    }

    return outputStrings.join(" ");
}

// Reverse the words in place...


console.log("REVERSED: " + reverse_words(message));
