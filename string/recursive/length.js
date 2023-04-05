function findLength(string) {
    if (string === '') {
      return 0;
    } else {
      return 1 + findLength(string.slice(1));
    }
  }
  
  let string1 = 'hello';
  console.log(findLength(string1)); // Output: 5
  