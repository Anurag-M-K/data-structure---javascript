function freequencyOfTheElement(arr){
    for(let i = 0 ; i<arr.length ; i++){
       let  c=1
        if(arr[i]!=-1){
            for(let j=i+1; j<arr.length;j++){
                if(arr[i]==arr[j]){ 
                    c++;
                    arr[j]=-1
                }
            }
            console.log(`the freequency of the ${arr[i]} is ${c}`)
        }
    }
}


arr = [1,2,4,5,4,5,5,6,5,5,6,58,8,85]

console.log(freequencyOfTheElement(arr))