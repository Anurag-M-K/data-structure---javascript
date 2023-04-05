function slice(array, start, end) {
    let result = [];
    for (let i = start; i < end; i++) {
      result.push(array[i]);
    }
    return result;
  }
  
  let arr = [1, 2, 3, 4, 5]
  arr.slice( 1, 3); 

  console.log(result)

