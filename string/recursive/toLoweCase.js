function toLowerCaseRecursive(str) {
    if (str === '') {
      return '';
    } else {
      const charCode = str.charCodeAt(0);
      let result = '';
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode(charCode + 32);
      } else {
        result += str[0];
      }
      return result + toLowerCaseRecursive(str.slice(1));
    }
  }
  
  let string = 'ANuRAG MK';
  let toLowerCaseString = toLowerCaseRecursive(string);
  console.log(toLowerCaseString);
  