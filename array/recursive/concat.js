function concatArrays(arr1, arr2) {
    // Base case: if both arrays are empty, return an empty array
    if (arr1.length === 0 && arr2.length === 0) {
      return [];
    }
    
    // Recursive case: concatenate the first element of arr1 with the result of
    // the recursive call on the rest of arr1 and arr2
    if (arr1.length > 0) {
      const first = arr1[0];
      const rest = arr1.slice(1);
      return [first].concat(concatArrays(rest, arr2));
    } else {
      // If arr1 is empty, concatenate the first element of arr2 with the result of
      // the recursive call on the rest of arr1 and arr2
      const first = arr2[0];
      const rest = arr2.slice(1);
      return [first].concat(concatArrays(arr1, rest));
    }
  }
  
  // Example usage
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const concatenated = concatArrays(arr1, arr2);
  console.log(concatenated); // Output: [1, 2, 3, 4, 5, 6]
  