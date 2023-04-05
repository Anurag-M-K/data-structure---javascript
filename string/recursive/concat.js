function recursiveConcat(a, b) {
    // Base case: if b is an empty string, return a
    if (b === '') {
      return a;
    }
    
    // Recursive case: take the first character of b and concatenate it to a
    return recursiveConcat(a + b[0], b.slice(1));
  }
  
  console.log(recursiveConcat('hello', 'how are you?'));
  