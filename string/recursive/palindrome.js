function isPalindrome(str) {
    // base case: if the length of the string is 0 or 1, it's a palindrome
    if (str.length <= 1) {
      return true;
    }
  
    // recursive case: if the first and last characters of the string are equal,
    // check whether the substring between them is also a palindrome
    if (str[0] === str[str.length - 1]) {
      return isPalindrome(str.slice(1, -1));
    }
  
    // if the first and last characters are not equal, it's not a palindrome
    return false;
  }
  
  // example usage
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello")); // false
  