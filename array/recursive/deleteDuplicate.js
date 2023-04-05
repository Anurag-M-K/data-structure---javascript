function deleteDuplicates(arr) {
    // Base case: if the array has only one element, return the array
    if (arr.length === 1) {
      return arr;
    }
  
    // Recursive case: concatenate the first element with the rest of the array,
    // excluding any duplicates of the first element
    const rest = deleteDuplicates(arr.slice(1));
    return rest.includes(arr[0]) ? rest : [arr[0]].concat(rest);
  }
  
  // Example usage
  const arr = [1, 2, 3, 2, 1];
  const result = deleteDuplicates(arr);
  console.log(result); // Output: [1, 2, 3]
  