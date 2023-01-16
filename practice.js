// function concat(a,b){
//     for(let i=0;i<b.length;i++){
//         a += b[i]
//     }
//     return a;
// }

// console.log(concat("hello ","how are u?"))


// function changetoelements(string){
//     for(let i=0;i<string.length;i++){
//         console.log(string[i])
//     }
// }

// changetoelements("hello")


// function target(string,a){
    
//     for(let i = 0; i<string.length; i++){
// if(string[i]===a){
//     return i;
// }
//     }
    
// }
// console.log(target("hello","o"))

function remove(string,a){
    
  let str = '';
  for(let i = 0 ; i<string.length;i++){
    if(a!==string[i]){
        str += string[i]
    }
  }
  return str;
   
}
console.log(remove("hello","o"))



