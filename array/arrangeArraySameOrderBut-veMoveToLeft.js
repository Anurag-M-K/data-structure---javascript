function arrangeArray(arr){
    let len = arr.length
 
    for(let i = len - 1; i>= 0 ; i--){
     if(arr[i]> 0){
         for(let j = i ; j < len - 1; j++){
            
             [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
 
         }
         len--;
     }
    }
    return arr;
     
 }
 
 
 console.log(arrangeArray([-512, 987, 741, 247, -478, -987, 215, 987, -215, 247,-8,-88,-63]))