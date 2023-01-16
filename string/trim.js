function trim(str){
    return str.replace(/^\s+|\s+$/g,'');
}

let trimmedString = trim("   hello guys  ")

console.log(trimmedString);