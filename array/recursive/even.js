function findEvenNumbers(arr) {
    // Base case: if the array is empty, return an empty array
    if (arr.length === 0) {
      return [];
    }
    
    // Recursive case: check if the first element is even and append it to the result
    const first = arr[0];
    const rest = arr.slice(1);
    const evens = findEvenNumbers(rest);
    
    if (first % 2 === 0) {
      return [first, ...evens];
    } else {
      return evens;
    }
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5, 6];
  const evenNumbers = findEvenNumbers(arr);
  console.log(evenNumbers); // Output: [2, 4, 6]
  