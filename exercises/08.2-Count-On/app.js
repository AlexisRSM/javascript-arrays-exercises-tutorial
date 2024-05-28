let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let hello = [];
for(let i = 0; i < myArray.length; i++) {
    let item = myArray[i];
    // MAGIC HAPPENS HERE
    //let datatype=typeof myArray[i];
    if(typeof myArray[i]==='object'){
        hello.push(myArray[i]);
    }
    
}

console.log(hello)
/*let hello = [];
for(let i = 0; i < myArray.length; i++) {
    let item = myArray[i];
    // MAGIC HAPPENS HERE
    //let datatype=typeof myArray[i];
    hello[i] = {
        item: item,
        data_type: typeof item
    };
} */