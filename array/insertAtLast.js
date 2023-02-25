function insertAtEnd(arr,value){
    var i =0;
    while(arr[i] !== undefined){
        i++;
    }
    arr[i]=value;
    return arr;
}

// function insertAtEnd(arr,value){
//     for(var i=0;i<arr.length-1;i++){
//         arr[arr.length] = value
//     }
//     arr.length++;
//     return arr;
// }

arr = [1,2,5,4,7,8,9];
insertAtEnd(arr,54)