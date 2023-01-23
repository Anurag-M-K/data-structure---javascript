function reverse(string){
    let a = ''
    for(i=string.length-1 ; i>=0 ;i--){
        a = a + string[i];
    }
    return a
}
