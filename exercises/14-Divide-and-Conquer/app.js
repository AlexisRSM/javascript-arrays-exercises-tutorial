let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
function mergeTwoList(arr){
    let odd=[];
    let even=[];
    for(numbers in arr){
        if(arr[numbers] % 2===0){
            even.push(arr[numbers])
        }
        else odd.push(arr[numbers])
    }
return odd.concat(even);
}
console.log(mergeTwoList(listOfNumbers));
//[...odd,...even];