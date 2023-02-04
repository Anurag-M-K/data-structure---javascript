function insertAt(arr,index,value){
for(var i = arr.length-1; i >= index;i--){
    arr[i+1] = arr[i];
}

arr[index ] = value;
return arr;
}



var array = [1, 2, 3, 4];
console.log(insertAt(array, 2, 10));
// Output: [1, 2, 10, 3, 4]