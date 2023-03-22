function findKthElement(arr,k){
   let count = 0;
    for(let i = 0 ; i< arr.length; i++){
        if(count === k) return arr[i]

        count++
    }
    
}



arr= [1,4,5,7,8,9]
console.log(findKthElement(arr,2))