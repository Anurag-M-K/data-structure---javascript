//o(logn)
// o(logn)
function binarySearchRecursive(array, value, start, end) {
    if (start > end) {
      return -1; // value not found
    }
  
    const mid = Math.floor((start + end) / 2);
  
    if (array[mid] === value) {
      return mid; // value found
    } else if (array[mid] > value) {
      return binarySearchRecursive(array, value, start, mid - 1); // search left half
    } else {
      return binarySearchRecursive(array, value, mid + 1, end); // search right half
    }
  }

  
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const index = binarySearchRecursive(array, 5, 0, array.length - 1);
  
  if (index !== -1) {
    console.log(`Value found at index ${index}`);
  } else {
    console.log(`Value not found`);
  }
    