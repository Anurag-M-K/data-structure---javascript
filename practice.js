function pivot(arr,start = 0 , end = arr.length - 1){
    const swap = (arr,idx1,idx2)=>{
        [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
    }

    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start + 1 ; i <=end ; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr,swapIdx , i);
        }
    }

    swap(arr,start, swapIdx);
    return swapIdx;
}

function quicksort(arr,left = 0 , right=arr.length-1){
    if(left < right){
        let pivotIdx = pivot(arr,left, right)

        quicksort(arr,left , pivotIdx - 1);
        quicksort(arr,pivotIdx + 1 , right)
    }
    return arr;
}



console.log(quicksort([12,5,4,7,8,9,6,2]))