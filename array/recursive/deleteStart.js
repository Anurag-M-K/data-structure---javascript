// function deleteLast(arr) {
//   // Base case: if the array is empty, return null
//   if (arr.length === 0) {
//     return null;
//   }
  
//   // Base case: if the array has only one element, return an empty array
//   if (arr.length === 1) {
//     return [];
//   }

//   // Recursive case: return a new array with all elements except the last one
//   const rest = deleteLast(arr.slice(0, -1));
//   return rest !== null ? rest.concat(arr[arr.length - 1]) : null;
// }

// // Example usage
// const arr = [1, 2, 3, 4, 5];
// const result = deleteLast(arr);
// console.log(result); // Output: [1, 2, 3, 4]