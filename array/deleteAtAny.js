function deleteAtAny(arr,index){
    for(let i =index;i<arr.length;i++){
        arr[i] = arr[i+1]
    }
    arr.length--;
    return arr;
}
var array = [1, 2, 3, 4];
console.log(deleteAtAny(array, 2));