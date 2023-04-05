function findMax(arr) {
    if (arr.length === 1) {
      return arr[0];
    } else {
      const subMax = findMax(arr.slice(1));
      return arr[0] > subMax ? arr[0] : subMax;
    }
  }
  
  const arr = [1, 2, 5, 3, 7, 6];
  console.log(findMax(arr)); // Output: 7
  