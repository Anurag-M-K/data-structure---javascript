function toUpperCaseRecursive(string, index = 0) {
    if (index === string.length) {
      return '';
    }
  
    let charCode = string.charCodeAt(index);
    if (charCode >= 97 && charCode <= 122) {
      charCode -= 32;
    }
  
    return String.fromCharCode(charCode) + toUpperCaseRecursive(string, index + 1);
  }
  
  let string = 'anurag';
  let upperCaseString = toUpperCaseRecursive(string);
  console.log(upperCaseString);
  