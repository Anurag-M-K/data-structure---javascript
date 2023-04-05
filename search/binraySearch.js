function binarySearch(array, element) {//o(logn)
  // First, sort the array in ascending order
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
    }
  }

  // Then, perform binary search on the sorted array
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === element) {
      return mid; // Return the index of the element if found
    } else if (array[mid] < element) {
        left = mid + 1; // Search the right half of the array
    } else {
      right = mid - 1; // Search the left half of the array
    }
  }
  return "not found"; // Return -1 if the element is not found
}

let arr = [7,11,2,3,15,4,9]

console.log(binarySearch(arr,9))
//applicatoin of bs 
// Implementing autocomplete functionality
// :Finding a number in a phonebook
// Searching a database