function insertAtEnd(arr,value){
    var i =0;
    while(arr[i] !== undefined){
        i++;
    }
    arr[i]=value;
    return arr;
}