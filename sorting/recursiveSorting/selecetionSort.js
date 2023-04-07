function recursiveSelectionSort(arr, n = arr.length) {
    // Base case: if the array has length 1, it is already sorted.
    if (n === 1) {
      return arr;
    }
  
    // Find the index of the largest element in the unsorted part of the array.
    let maxIndex = 0;
    for (let i = 1; i < n; i++) {
      if (arr[i] > arr[maxIndex]) {
        maxIndex = i;
      }
    }
  
    // Swap the largest element with the last element in the unsorted part of the array.
    if (maxIndex !== n - 1) {
      [arr[maxIndex], arr[n - 1]] = [arr[n - 1], arr[maxIndex]];
    }
  
    // Recursively sort the rest of the array.
    recursiveSelectionSort(arr, n - 1);
  
    // Return the sorted array.
    return arr;
  }
  
  console.log(recursiveSelectionSort([1, 2, 10, 5])); // Output: [1, 2, 5, 10]
  