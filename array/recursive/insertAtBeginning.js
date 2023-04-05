function insertAtBeginning(arr, element) {
  // Base case: if the array is empty, return the element as an array
  if (arr.length === 0) {
    return [element];
  }

  // Recursive case: concatenate the element to the result of the recursive call
  return [element].concat(insertAtBeginning(arr.slice(0, arr.length - 1), arr[arr.length - 1]));
}

const arr = [2, 3, 4];
const element = 1;
const newArr = insertAtBeginning(arr, element);
console.log(newArr); // Output: [1, 2, 3, 4]
