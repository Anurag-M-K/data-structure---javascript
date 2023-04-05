function compareString(string1,string2){
    let i = 0;
    while(i < string1.length && i < string2.length){
        if(string1[i] !==string2[i]){
            return false;
        }
        i++
    }
    return i === string1.length && i === string2.length
}

console.log(compareString("hello","hello"))