function stringToBinary(str){
    let binary = ''
    for(let i = 0; i<str.length; i++){
        let charCode = str.charCodeAt(i);
        binary += charCode.toString(2)+ ' '

    }   
    return binary;
}
console.log(stringToBinary("hello"))