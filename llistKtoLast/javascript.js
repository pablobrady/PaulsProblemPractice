var answerStr = "n/a";

// Make the LList
var LList = function() {
	this.homeNode = null;
}

LList.prototype.add = function( value ) {
	var currNode = null;
	var newNode = {
		value: value,
		next: null		/* only for clarity */
	}

	if( !this.homeNode ) {
		this.homeNode = newNode;
		return this.homeNode.value;
	}

	currNode = this.homeNode;
	while( currNode.next ) {
		currNode = currNode.next;
	}
	currNode.next = newNode;
	currNode      = newNode;

	return currNode.value;
}



// Init
var xNode = new LList();
for(var x=0; x<20; x++) {
	console.log( "Add returned: " + xNode.add( x ) );
}

// Traverse all nodes


// Output Last Node - 7




var el = document.getElementById('answer');
el.innerHTML = answerStr;

