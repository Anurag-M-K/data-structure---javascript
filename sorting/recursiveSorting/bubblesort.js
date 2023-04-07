//o(n^2)
function recursiveBubbleSort(arr, n = arr.length) { 
    if (n === 1) {
      return arr;
    }
  
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  
    return recursiveBubbleSort(arr, n - 1);
  }
  
  // Example usage:
  const arr = [5, 2, 1, 4, 3];
  const sortedArr = recursiveBubbleSort(arr);
  console.log(sortedArr); // Output: [1, 2, 3, 4, 5]
  