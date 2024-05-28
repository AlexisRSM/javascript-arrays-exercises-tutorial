let arr=[1,2,3,4,5,6,7,8,9,10];

function sumTheElements(theArray) {
	let total = 0;
	// Your code here
	for(item in theArray){
		total+=theArray[item];
	}
	return total;
}
console.log(sumTheElements(arr));