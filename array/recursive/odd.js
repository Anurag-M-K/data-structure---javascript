function findOddNumbers(arr) {
    // Base case: if the array is empty, return an empty array
    if (arr.length === 0) {
      return [];
    }
    
    // Recursive case: check if the first element is odd and append it to the result
    const first = arr[0];
    const rest = arr.slice(1);
    const odds = findOddNumbers(rest);
    
    if (first % 2 !== 0) {
      return [first, ...odds];
    } else {
      return odds;
    }
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5, 6];
  const oddNumbers = findOddNumbers(arr);
  console.log(oddNumbers); // Output: [1, 3, 5]
  