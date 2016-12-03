var answerStr = "n/a";
var kToLast = 7;

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

LList.prototype.traverseAll = function() {
	var currNode = null;

	if( !this.homeNode ) {
		return;
	}
	currNode = this.homeNode;

	while( currNode.next ) {
		currNode = currNode.next;
	}
	return currNode.value;
}

LList.prototype.findKToLast = function( k ) {
	var currNode = null;

	if( !this.homeNode ) {
		return;
	}
	currNode = this.homeNode;

	var counter = 0;
	// Position currNode at K position
	while( currNode.next && counter<k) {
		currNode = currNode.next;
		counter++;
	}

	// Walk LList from K onward...  keeping a second kNodePointer too
	var kNode = this.homeNode;
	while( currNode.next ) {
		currNode = currNode.next;

		if( kNode.next ) {
			kNode = kNode.next;
		}
	}


	return kNode.value;
}



// Init
var xNode = new LList();
for(var x=0; x<20; x++) {
	console.log( "Add returned: " + xNode.add( x ) );
}

// Traverse all nodes
console.log("Last node is: " + xNode.traverseAll() );

// Output Last Node - 7
console.log("K to Last Node is: " + xNode.findKToLast( kToLast ) );



var el = document.getElementById('answer');
el.innerHTML = answerStr;

