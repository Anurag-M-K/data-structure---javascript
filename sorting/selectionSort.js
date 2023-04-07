//taking smallest as first element  and iterate through every element finally smallest value assigned to lower.
//then it swap to first element , which his continously iterate and finally it should be sorted
function slectionSort(arr){
    for(let i = 0; i<arr.length ; i++){
        let lower = i;
        for(j=i+1; j<arr.length ; j++){
            if(arr[j] < arr[lower]){
                lower = j;
            }
        }
        if(i!==lower){
            var temp = arr[i];
            arr[i] = arr[lower];
            arr[lower] = temp;
        }
    }
    return arr;
}

console.log(slectionSort([1,2,10,5]))