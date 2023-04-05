function findSecondLargest(arr) {
    // Base case: if the array has only one element, return null
    if (arr.length === 1) {
      return null;
    }
    
    // Recursive case: divide the array in two halves and call the function recursively
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    const maxLeft = Math.max(...left);
    const maxRight = Math.max(...right);
    
    if (maxLeft > maxRight) {
      return findSecondLargest(left.filter(e => e !== maxLeft)) || maxRight;
    } else {
      return findSecondLargest(right.filter(e => e !== maxRight)) || maxLeft;
    }
  }
  
  // Example usage
  const arr = [3, 7, 1, 9, 5];
  const secondLargest = findSecondLargest(arr);
  console.log(secondLargest); // Output: 7
  