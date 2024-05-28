let i = 20;

do {
    // Magic goes here
    if(i % 5 === 0 && i>0){
        console.log(i+'!')
    }
    else if(i===0){
        console.log('LIFTOFF');
    }
    else console.log(i);
    i--;
} while (i >= 0);
