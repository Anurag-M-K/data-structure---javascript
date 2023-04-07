//efficient storage and retrieval
//auto complete
//space efficient

//inserting – o (n)
// Deleting – o(n)
// Search – o ( 1 )

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
    deleteSuffix(suffix) {
        let node = this.root;
        const path = [];
    
        for (let i = 0; i < suffix.length; i++) {
          const char = suffix[i];
          if (!node.children[char]) {
            return;
          }
          path.push([node, char]);
          node = node.children[char];
        }
    
        if (!node.children) {
          // suffix already deleted
          return;
        }
    
        delete node.children;
    
        for (let i = path.length - 1; i >= 0; i--) {
          const [parent, char] = path[i];
          const child = parent.children[char];
          if (Object.keys(child.children).length === 0) {
            delete parent.children[char];
          } else {
            break;
          }
        }
      }
}


let  tree = new SuffixTree('ANURAG');
console.log(tree.searchSubstr('AN')); // true
// console.log(tree.searchSubstr('na')); // true
// console.log(tree.searchSubstr('ananas'))