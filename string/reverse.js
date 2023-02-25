function reverse(str){
    let r = "";
    for(let i = str.length-1 ; i >=0 ; i--){
        r += str[i]
    }
    return r
}

let str = "hello"
console.log(reverse(str))