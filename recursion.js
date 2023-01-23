function countDown(num){
    if(num<=0){
        console.log('you are done');
        return
    }
    console.log(num);
    num--;
    countDown(num)
    
}

function sumRange(num){
    if(num===1) return 1;
    return num + sumRange(num-1)
}

sumRange(10);
