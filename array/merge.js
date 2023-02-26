function merge(arr1,arr2){
    let len = arr1.length;

    for(let i = 0 ; i< arr2.length ; i++ ){
        arr1[len] = arr2[i]
        len++; 
    }
    return arr1;
}
let ar = [1,5,78,5]
let arr = [1,5,78,5]


console.log(merge(ar,arr))