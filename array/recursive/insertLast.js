function insertAtEnd(arr, element) {
  // Base case: if the array is empty, return the element as an array
  if (arr.length === 0) {
    return [element];
  }

  // Recursive case: concatenate the first element with the rest of the array, and call the function with the rest of the array
  return [arr[0]].concat(insertAtEnd(arr.slice(1), element));
}

// Example usage
const arr = [1, 2, 3];
const element = 4;
const newArr = insertAtEnd(arr, element);
console.log(newArr); // Output: [1, 2, 3, 4]
