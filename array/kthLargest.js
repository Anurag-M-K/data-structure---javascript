function kethlargest(arr,k){
    let pos= 1 ;
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i +1; j<arr.length; j++){
            if(arr[i] < arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
                
            }
        }
    }
    for(let i = 0 ; i < arr.length  ; i++){
    if(arr[i] !== arr[i+1]){
        pos++
    }
    if(pos == k){
    console.log(arr[i+1])
    break;
    }
    }
    //return the kth element
    return arr[k-1];
}
let arr = [3, 1, 4, 1, 5, 9,5,5, 2, 6, 5, 3, 5];
let k = 4;
let kthLargestElement = kethlargest(arr, k);