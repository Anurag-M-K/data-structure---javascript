function checkPalindrom(str){
    const len = str.length;
    for(let i= 0; i<len/2; i++){
        if(str[i]!= str[len-1-i]){
            return "its not a palindrome"
        }
    }
    return 'its a palindrome';
}

checkPalindrom("amma");