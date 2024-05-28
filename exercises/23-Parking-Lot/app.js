let biArr = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
let state = {
  totalSlots:0,
  avaiableSlots:0,
  occupiedSlots:0
}

function getParkingLotState(biArr){
 
  let counter=0;
  for(let i=0; i<biArr.length;i++){
    for(let j=0; j< biArr[i].length;j++){
        if(biArr[i][j]===0){
          continue;
        }
        else if(biArr[i][j]===1){
          counter+=1;
          state.occupiedSlots+=1;
        }
        else if(biArr[i][j]===2){
          counter+=1;
          state.avaiableSlots+=1;
        }
    }
    state.totalSlots=counter;
  }
return state;
}

console.log(getParkingLotState(biArr))
