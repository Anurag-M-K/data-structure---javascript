function insertAtStart(arr,value){
    for(var i = arr.length-1 ; i>=0;i--){
        arr[i+1] = arr[i];

    }
    arr[0] = value;
    return arr;
}


var array = [1, 2, 3, 4];
console.log(insertAtStart(array, 10));