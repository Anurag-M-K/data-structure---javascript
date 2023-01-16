function reverse(string){
    let r = '';
    for(let i=string.length-1 ; i>=0;i--){
        r += string[i];
    }
    return r;
}

console.log(reverse('hello'))