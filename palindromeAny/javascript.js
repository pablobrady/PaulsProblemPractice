

var isPalindrome = function( str ) {
	var len = str.length;
	var results = true;

	// civic
	// plbblp

	for( var i=0; i<Math.round(len/2); i++) {
		if( str[i] !== str[len-i-1] ) {
			results = false;
			break;
		}
	}

	return results;
}

