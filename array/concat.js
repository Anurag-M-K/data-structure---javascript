function concat(arr1,arr2){
    let start = arr1.length;
    for(let i = 0; i< arr2.length; i++){
        arr1[start++] =  arr2[i];
    }
    return arr1;
}

let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]
console.log(concat(arr1,arr2))