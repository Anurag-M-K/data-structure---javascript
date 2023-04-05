function sumArray(arr) {
    // Base case: if the array is empty, return 0
    if (arr.length === 0) {
      return 0;
    }
    
    // Recursive case: add the first element to the sum of the remaining elements
    return arr[0] + sumArray(arr.slice(1));
  }
  
  const arr = [1, 2, 3, 4, 5];
  const sum = sumArray(arr);
  console.log(sum); // Output: 15
  