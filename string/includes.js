let myString = 'hello world';
let subString = 'world';
let isSubstring = false;
for(let i = 0 ; i <myString.length - subString.length + 1 ; i++){
    if(myString[i] === subString[0]){
        let j = 1;
        while(j<subString.length && myString[i + j] === subString[j]){
            j++;
        }
        if(j === subString.length){
            isSubstring = true;
            break;
        }
    }
}

// console.log(isSubstring)


//  with built in function 

let text = "hello world"

console.log(text.includes("z"))