function sum(arr){
    let sum = 0;
    for(let i = 0; i< arr.length; i++ ){
        sum = sum + arr[i];
    }
    return sum;
}

arr = [1,2,3,54,6,5]
console.log(sum(arr))