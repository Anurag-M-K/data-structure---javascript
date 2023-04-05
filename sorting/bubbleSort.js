function bubbleSort(arr){
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for(var j = 0; j < len-i-1; j++){
            if (arr[j] > arr[j+1]) {
                // Swap elements 
               [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

   

console.log(bubbleSort([12,45,8,5,5,1,5]))