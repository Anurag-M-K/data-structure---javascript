function findEven(arr){
    var even = [];
    for(var i=0;i < arr.length; i++){
        if(arr[i] % 2 ===0){
            even.push(arr[i]);
        }
    }

    return even;
}

var array = [1, 2, 3, 4, 5, 6];
console.log(findEven(array));