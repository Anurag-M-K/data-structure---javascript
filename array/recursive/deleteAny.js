function deleteFromArray(arr, value) {
    // Base case: if the array is empty, return an empty array
    if (arr.length === 0) {
      return [];
    }
    
    // Recursive case: copy all elements from arr to a new array, except for the one
    // that equals the value we want to delete
    const first = arr[0];
    const rest = arr.slice(1);
    if (first === value) {
      return deleteFromArray(rest, value);
    } else {
      return [first].concat(deleteFromArray(rest, value));
    }
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  const deleted = deleteFromArray(arr, 3);
  console.log(deleted); // Output: [1, 2, 4, 5]
  