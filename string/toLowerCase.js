function toLowerCase(string){
    let result = '';
    for(let i = 0 ; i<string.length; i++){
        let charCode = string.charCodeAt(i);
        if(charCode >=65 && charCode <=97){
            charCode += 32;
        }
        result += String.fromCharCode(charCode);
    }
    return result;
}

let string = 'ANURAG MK';
let toLowerCaseString = toLowerCase(string);
console.log(toLowerCaseString)
