function checkPalindrome(str){
    let len = str.length;
    for(let i = 0 ;i <len/2 ; i++){
        if(str[i] !== str[len-1-i]){
            return "it is not palindrome"
        }
    }
    return 'its palindrome'
}


console.log(checkPalindrome("amma"))