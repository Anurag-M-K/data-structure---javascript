function frequencyOfTheElement(arr) {
    // Helper function to count the frequency of an element in an array
    function countFrequency(element, arr, start) {
      if (start >= arr.length) {
        return 0;
      }
      return (arr[start] === element ? 1 : 0) + countFrequency(element, arr, start + 1);
    }
  
    // Base case: if the array is empty, return
    if (arr.length === 0) {
      return;
    }
  
    const element = arr[0];
    const count = countFrequency(element, arr, 0);
    console.log(`The frequency of the element ${element} is ${count}`);
    
    // Recursive case: call the function with the rest of the array
    frequencyOfTheElement(arr.slice(1));
  }
  
  // Example usage
  const arr = [1,2,4,5,4,5,5,6,5,5,6,58,8,85];
  frequencyOfTheElement(arr);
  