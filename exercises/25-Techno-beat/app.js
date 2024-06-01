function lyricsGenerator(arr){
    let musicArray = [];
    let repetition = 0;
    
    for (let number of arr) {
        if (number === 0) {
            musicArray.push("Boom");
            repetition = 0; // reset repetition counter on 0
        } else if (number === 1) {
            repetition += 1;
            musicArray.push("Drop the bass");
            if (repetition === 3) {
                musicArray.push("!!!Break the bass!!!");
                repetition = 0; // reset the counter after breaking the bass
            }
        }
    }

    return musicArray.join(" ");
}

// Don't change anything below this line
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0])); // Boom Boom Drop the bass Drop the bass Boom Boom Boom
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0])); // Boom Boom Drop the bass Drop the bass Drop the bass !!!Break the bass!!! Boom Boom Boom
console.log(lyricsGenerator([0, 0, 0])); // Boom Boom Boom
console.log(lyricsGenerator([1, 0, 1])); // Drop the bass Boom Drop the bass
console.log(lyricsGenerator([1, 1, 1])); // Drop the bass Drop the bass Drop the bass !!!Break the bass!!!
