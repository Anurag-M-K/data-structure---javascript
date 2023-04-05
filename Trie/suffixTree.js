class SuffixTree {
    constructor(str){
        this.root = { children: {} };
        for(let i = 0 ; i < str.length; i++){
            this.addSuffix(str.slice(i))
        }
    }
    addSuffix(suffix){
        let node = this.root;
        for( let i = 0; i < suffix.length ; i++){
            const char = suffix[i];
            if(!node.children[char]){
                node.children[char] = { children : {} };
            }
            node = node.children[char];
        }
    }
    searchSubstr(substr){
        let node = this.root;
        for(let i = 0 ; i<substr.length; i++){
            const char = substr[i];
            if(!node.children[char]){
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}


let  tree = new SuffixTree('ANURAG');
// console.log(tree.searchSubstr('an')); // true
// console.log(tree.searchSubstr('na')); // true
// console.log(tree.searchSubstr('ananas'))