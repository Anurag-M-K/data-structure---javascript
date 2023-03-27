function secondLargest(arr){
    let l1 = Number.NEGATIVE_INFINITY;
    let l2 = Number.NEGATIVE_INFINITY;
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]> l1){
            l2 = l1;
            l1 = arr[i];
        }else if(arr[i]> l2 && arr[i]< l1){
            l2 = arr[i];
        }
    }
    return l2
} 


console.log(secondLargest([-512, -987, -741, -247, -478, -987, -215, -987, -215, -247]))
