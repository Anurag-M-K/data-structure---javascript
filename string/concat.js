function concat(a,b){
    for(let i=0;i<b.length;i++){
        a += b[i] 
    }
    return a;
}

console.log(concat('hello','how ar u?'))

// o(n)