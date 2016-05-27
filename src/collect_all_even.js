'use strict';

function collect_all_even(collection) {
 	var oArr = [];
	for(var i=0;i<collection.length;i++){
		if(collection[i]%2 == 0){
			oArr.push(collection[i]);
		}
	}
	return oArr;
}

module.exports = collect_all_even;
