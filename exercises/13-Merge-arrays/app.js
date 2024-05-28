let chunkOne = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunkTwo = [ 'Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas' ];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    // Your code here
   /*  for(item in firstArray){
        newArray.push(firstArray[item]);
    }
    for( item in secondArray){
        newArray.push(secondArray[item]);
    } */
    newArray=[...firstArray,...secondArray];
    return newArray
}

console.log(mergeArrays(chunkOne, chunkTwo));
