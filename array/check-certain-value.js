function includes(arr,value){
    for(let i =0 ;i <arr.length; i++){
        if(arr[i] == value){
            return true;
        }
    }
    return false;
}


arr = [12,4,5,5,56,5,8]

console.log(includes(arr,4))
