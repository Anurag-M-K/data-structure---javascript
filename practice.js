function intro(arr,pos){
    for(let i = pos;i<arr.length ; i++){
        if(arr.length < 0) return undefined
        arr[i] = arr[i+1];

    }
    arr.length--
    sort(arr,pos)
    return arr;
}

function sort (arr,pos){
    for(let i = pos ;i < arr.length ; i++){
        for(let j = i + 1 ; j< arr.length ; j++){
            if(arr[i]>arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp

            }
        }
    }
    return arr
}



const arr = [7,8,9,4,3,1]
console.log(intro(arr,1))
//7  8  9  4  3  1