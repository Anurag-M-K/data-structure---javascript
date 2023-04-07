 // class HashTable {
//     constructor(size=4){
//         this.keyMap = new Array(size)
//     }
//     _hash(key){
//         let total = 0;
//         let WEIRD_PRIME = 31;
//         for(let i= 0;i<Math.min(key.length,100); i++){
//             let char = key[i];
//             let value = char.charCodeAt(0)-96
//             total = (total*WEIRD_PRIME + value) % this.keyMap.length;
//         }
//         return total;
//     }
//     set(key,value){
//         let index = this._hash(key);
//         if(!this.keyMap[index]){
//             this.keyMap[index] = []
//         }
//         this.keyMap[index].push([key,value])
//     }
//     get(key){
//         let index = this._hash(key);
//         if(this.keyMap[index]){
//             for(let i = 0 ; i<this.keyMap[index].length; i++){
//                 if(this.keyMap[index][i][0]===key){
//                     return this.keyMap[index][i]
//                 }
//             }
//         }
//     }
// }
        //  avg//   worst
//search -  o(1)  - o(n)
// insert -  o(1) - o(n)
//deltee -  o(1) - o(n)
//fast retreivel of data, databse indexing, caching
class HashTable {
    constructor(size = 17) {
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      let prime = 31;
      for (let i = 0; i < key.length; i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * prime + value) % this.keyMap.length;
      }
      return total;
    }
  
    set(key, value) {
      let index = this._hash(key);
      if (!this.keyMap[index]) {
        this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);
    }
  
    get(key) {
      let index = this._hash(key);
      if (this.keyMap[index]) {
        for (let i = 0; i < this.keyMap[index].length; i++) {
          if (this.keyMap[index][i][0] === key) {
            return this.keyMap[index][i];
          }
        }
      }
      return undefined;
    }
  
    delete(key) {
      let index = this._hash(key);
      if (this.keyMap[index]) {
        for (let i = 0; i < this.keyMap[index].length; i++) {
          if (this.keyMap[index][i][0] === key) {
            this.keyMap[index].splice(i, 1);
            return true;
          }
        }
      }
      return false;
    }
  }
  
  // Example usage
  const ht = new HashTable(17);
  ht.set("apple", 1);
  ht.set("banana", 2);
  ht.set("banana", 3);
  console.log(ht.get("banana")); // Output: ["banana", 3]
  console.log(ht.delete("banana")); // Output: true
  console.log(ht.get("apple")); // Output: ["apple", 1]
  console.log(ht.get("banana")); // Output: ["banana", 2]
  console.log(ht.get("banana")); // Output: undefined
  

// var ht = new HashTable(2);
ht.set('maroon',"#800000")
ht.set('yellow',"#FFFF00")
ht.set('plive',"#808000")
ht.set('salmon',"#FA8072")


// ht.get("salmon")










