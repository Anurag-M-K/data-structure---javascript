function quicksort(arr){
    if(arr.length < 2){
        return arr
    }

    let pivot = arr[0]
    let left = [];
    let right = [];

    for(let i = 1 ; i<arr.length ; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
       
    }
    return [...quicksort(left),pivot,...quicksort(right)]
}

let arr = [4,87,9,95,65,97]


console.log(quicksort([4,87,9,95,65,97]))