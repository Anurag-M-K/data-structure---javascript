function contains(arr, value) {
    // Base case: if the array is empty, return false
    if (arr.length === 0) {
      return false;
    }
    
    // Recursive case: check if the first element is equal to the value
    const first = arr[0];
    const rest = arr.slice(1);
    
    if (first === value) {
      return true;
    } else {
      return contains(rest, value);
    }
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  const value = 3;
  const found = contains(arr, value);
  console.log(found); // Output: true
  