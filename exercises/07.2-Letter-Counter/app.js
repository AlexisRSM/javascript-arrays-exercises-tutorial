let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";
let counts = {};

for (let i = 0; i < par.length; i++) {
    let char = par[i].toLowerCase();
    if (char !== " ") { // Only process if char is not a space
        counts[char] = (counts[char] || 0) + 1; //If count of that character is not defined it set it to zero 
    }
}

console.log(counts);
