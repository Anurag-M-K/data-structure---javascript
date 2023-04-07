function linearSearchRecursive(array, value, index) {
    if (index >= array.length) {
      return -1; // value not found
    }
  
    if (array[index] === value) {
      return index; // value found
    } else {
      return linearSearchRecursive(array, value, index + 1); // search next element
    }
  }
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const index = linearSearchRecursive(array, 5, 0);
  
  if (index !== -1) {
    console.log(`Value found at index ${index}`);
  } else {
    console.log(`Value not found`);
  }
    