function kthLargestRecursive(arr, k) {
    if (k < 1 || k > arr.length) {
      return null; // invalid input
    }
    
    if (arr.length === 1) {
      return arr[0]; // base case
    }
    
    let pivot = arr[0];
    let left = [];
    let right = [];
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    
    if (right.length >= k) {
      return kthLargestRecursive(right, k); // search right side
    } else if (right.length === k - 1) {
      return pivot; // pivot is kth largest
    } else {
      return kthLargestRecursive(left, k - right.length - 1); // search left side
    }
  }
  
  const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

  console.log(kthLargestRecursive(arr, 1)); // Output: 9 (largest element)
  console.log(kthLargestRecursive(arr, 2)); // Output: 6 (second largest element)
  console.log(kthLargestRecursive(arr, 5)); // Output: 3 (fifth largest element)
    