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

//recurstion 
// function isPrime(n, i = 2) {
//     if (n <= 2) {
//       return (n === 2) ? true : false;
//     }
//     if (n % i === 0) {
//       return false;
//     }
//     if (i * i > n) {
//       return true;
//     }
//     return isPrime(n, i + 1);
//   }

const arr = [1,5,4,6,13,7,8]
for(let i = 0; i<arr.length; i++){
    if(isPrime(arr[i])){
        console.log(arr[i] + " is a prime number")
    }
}