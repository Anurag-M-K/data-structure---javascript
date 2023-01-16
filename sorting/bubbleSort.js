function selectionsort(arr){
    for(let i=0;i<arr.length; i++){
        let lower = i;

        for(let j = i+1; i<arr.length ; j++){
            if(arr[j]<lower)
            lower = j;
        }
        if(i!==lower){
        let temp = arr[i];
           arr[i]= arr[lower];
            arr[lower] = temp;
        }
    }
    return arr;
    }
   

console.log(selectionsort([12,45,8,5,5,1,5]))