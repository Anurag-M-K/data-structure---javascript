function replace(string,search,replacement){
    let result = '';
    let i = 0;
    while(i<string.length){
        if(string.substring(i,i+search.length) === search){
            result += replacement;
            i += search.length;
        }else{
            result += string[i];
            i++;
        }
    }
    return result;
}
console.log(replace("hello world","world","bai"))