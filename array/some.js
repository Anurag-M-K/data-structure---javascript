//the some mthod tests whether at least one element in the array passes
// the test implemented by the provided function,
// it returns true if, in the array,
// it finds an element for which the provided fucntion returns true. otherwise it retruns 
//false

const arr = [1,2,3,4,65,6,7,8];

const even = (element)=> element % 2 ===0;

console.log(arr.some(even))