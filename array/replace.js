//replace a positoin 
function replace(arr,reVal) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        arr[i] = reVal;
      }
    }
    return arr;
  }
  
  let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  replace(ar,"$");
  console.log(ar);
  


