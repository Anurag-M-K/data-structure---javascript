function reverse(str) {
    // Base case: if the string has only one character, return it
    if (str.length === 1) {
      return str;
    }
    // Recursive case: return the last character of the string concatenated with
    // the result of calling the function on the string without the last character
    return str[str.length - 1] + reverse(str.slice(0, -1));
  }
  
  let str = "hello";
  console.log(reverse(str)); // Output: "olleh"

  