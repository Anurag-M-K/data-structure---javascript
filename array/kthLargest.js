function kethlargest(arr,k){
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i +1; j<arr.length; j++){
            if(arr[i] < arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    //return the kth element
    return arr[k-1];
}
let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let k = 4;
let kthLargestElement = kethlargest(arr, k);
console.log(kthLargestElement);