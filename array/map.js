//the map method creates a new array populated with the results of calling a provided 
//function on every element in the calling array


const arr = [1,2,1,2,4,5,7,8,7];

const result = arr.map(x=> x*2)

console.log(result)