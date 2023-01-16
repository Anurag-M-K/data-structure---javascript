

function findLength(string){
    let count = 0;
    while(string[count]!=undefined){
        count++;
    }
    return count;
}

let string1 = 'hello'
console.log(findLength(string1))