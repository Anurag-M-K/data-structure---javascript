function stringToInt(str) {
    const intValue = parseInt(str);
    if (isNaN(intValue)) {
      return 0; // Return 0 for non-numeric strings
    } else {
      return intValue;
    }
  }

var str = "kkkihg"
console.log(stringToInt(str))