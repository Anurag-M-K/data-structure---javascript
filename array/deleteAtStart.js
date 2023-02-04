function deleteAtFirst(arr){
    for(var i=0;i<arr.length-1 ; i++){
        arr[i]=ar[i+1];
    }
    arr.length--;
    return arr;
}


var array = [1, 2, 3, 4];
console.log(deleteAtStart(array));