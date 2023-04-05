function insertElementAtPosition(arr, element, position) {
    // Base case: if position is out of bounds or negative, return the original array
    if (position < 0 || position > arr.length) {
      return arr;
    }
    
    // Recursive case: insert the element at the specified position
    const left = arr.slice(0, position);
    const right = arr.slice(position);
    
    return left.concat(element, right);
  }
  
  // Example usage
  const arr = [1, 2, 4, 5];
  const element = 3;
  const position = 2;
  
  const newArr = insertElementAtPosition(arr, element, position);
  console.log(newArr); // Output: [1, 2, 3, 4, 5]
  