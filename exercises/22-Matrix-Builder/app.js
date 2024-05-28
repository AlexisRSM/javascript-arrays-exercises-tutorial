// Your code here
function matrixBuilder(integer){
    let newMatrix=[];
    for(let i=0;i<integer;i++){
        newMatrix[i] = [];
        for(let j=0;j <integer; j++){
            newMatrix[i][j]=(Math.floor(Math.random()*2));
        }
    }
return newMatrix;
}

//can b done with push also , just need to push a a new row  and after the second for push row into matrix
// Do not change anything from this line down
console.log(matrixBuilder(5))
