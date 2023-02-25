function pop(arr){
    if(arr.length==0){
        return undefined;
    }

     arr.splice(arr.length-1,1)  
return arr;
}

arr= [12,4,5,7,8,7]

console.log(pop(arr))