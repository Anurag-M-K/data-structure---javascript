function isPrime(num){
if(num <=1){
    return false;
}
for(let i = 2 ; i<= Math.sqrt(num); i++){
    if(num % i === 0){
        return false;
    }

}
return true;
    
}
const arr = [1,5,4,6,13,7,8]
for(let i = 0; i<arr.length; i++){
    if(isPrime(arr[i])){
        console.log(arr[i] + " is a prime number")
    }
}