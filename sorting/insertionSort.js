//take first element as current value  and check the previous elements and find its correct position,
function insertionSort(arr){
    for(let i = 1; i<arr.length; i++){
        var currentVal = arr[i];
        let j = i-1;
        while (j>=0 && arr[j]>currentVal){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = currentVal;
    }
    return arr;
} 



console.log(insertionSort([12,45,78,97,2,5,8,9,6,7]))