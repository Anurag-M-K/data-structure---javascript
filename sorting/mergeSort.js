function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);
  
    return merge(mergeSort(leftArray), mergeSort(rightArray));
  }
  
  function merge(leftArray, rightArray) {
    const resultArray = [];
  
    while (leftArray.length && rightArray.length) {
      if (leftArray[0] <= rightArray[0]) {
        resultArray.push(leftArray.shift());
      } else {
        resultArray.push(rightArray.shift());
      }
    }
  
    return resultArray.concat(leftArray, rightArray);
  }


  const unsortedArray = [5, 3, 8, 4, 2, 7, 1, 6];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // [1, 2, 3, 4, 5, 6, 7, 8]