let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let typesArray=[];
for(items in mix){
    typesArray.push(typeof(mix[items]));
}
console.log(typesArray);