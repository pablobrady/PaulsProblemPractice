


var checkTheShuffledDeck = function(shuffled_deck, half1, half2) {
    var allFound = true;
    for(var i=0; i<shuffled_deck.length; i++) {
        var sCard = shuffled_deck[i];
        if(sCard === half1[0]) {
            console.log("Match:  HALF1 - " + half1[0]);
            half1.shift();
        } else if(sCard === half2[0]) {
            console.log("Match:  HALF2 - " + half2[0]);
            half2.shift();
        } else {
            allFound = false;
            console.log("NO MATCH FOUND! - shuffled_deck[0] = " + shuffled_deck[0]);
        }
    }

    if( half1.length > 0 || half2.length > 0 ) {
        allFound = false; // The "halves" should be empty at this point.
    }

    return allFound;
}

// console.log("CHECK THE DECK:");
// console.log( checkTheShuffledDeck() );
