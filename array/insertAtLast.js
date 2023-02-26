function insertAtEnd(arr,value){
    var i =0;
    while(arr[i] !== undefined){
        i++;
    }
    arr[i]=value;
    return arr;
}



arr = [1,2,5,4,7,8,9];
insertAtEnd(arr,54)

console.log(insertAtEnd(arr,54))