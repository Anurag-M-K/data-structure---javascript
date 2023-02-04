function findOdd(arr){
    var odd = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 !==0){
            odd.push(arr[i])
        }
    }
    return odd;
}

var array = [1, 2, 3, 4, 5, 6];
console.log(findEven(array));