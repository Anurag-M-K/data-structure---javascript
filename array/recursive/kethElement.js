function findKthElement(arr, k) {
    // Base case: if k is less than or equal to 0 or greater than the array length, return null
    if (k <= 0 || k > arr.length) {
      return null;
    }
  
    // Recursive case: if k is 1, return the first element of the array
    if (k === 1) {
      return arr[0];
    }
  
    // Otherwise, return the (k-1)th element of the rest of the array
    return findKthElement(arr.slice(1), k - 1);
  }
  const arr = [1, 2, 3, 4, 5];
  const k = 3;
  const kthElement = findKthElement(arr, k);
  console.log(kthElement);