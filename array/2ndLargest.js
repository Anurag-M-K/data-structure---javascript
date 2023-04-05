function secondLargest (arr){
    let l1 = 0;
    let l2 = 0;
    for(let i = 0; i< arr.length;i++){
        if(arr[i] > l1){
            l2 = l1;
            l1 = arr[i];;
        }
        else if(arr[i] > l2 && arr[i] < l1){
            l2 = arr[i]
        }
    }
    return l2;
}
console.log(secondLargest( [1,2,4,5,6,8]))