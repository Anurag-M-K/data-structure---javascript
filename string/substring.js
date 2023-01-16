function substring(string,start,end){
    let result = '';
    for(let i = start; i<end; i++){
        result += string[i];
    }
    return result;
}

console.log(substring('hello',1,3))