function toUpperCase(string){
    let result = '';
    for(let i =0 ; i < string.length; i++){
        let charCode = string.charCodeAt(i);
        if(charCode >=97 && charCode <=122){
            charCode -= 32;
        }
        result += String.fromCharCode(charCode);//which is used to convert code to string
    }
    return result;
}

let string= 'anurag';
let upperCaseString = toUpperCase(string);
console.log(upperCaseString)
