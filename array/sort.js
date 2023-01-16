let arr1 = [12,4,56,8,8,61,5]

for(let i = 0;i<arr1.length;i++){
    for(let j = i+1;j<arr1.length;j++){
        if(arr1[i]>arr1[j]){
            let temp = arr1[i];
            arr1[i]= arr1[j];
            arr1[j]=temp;
        }
    }
    
}
console.log(arr1)