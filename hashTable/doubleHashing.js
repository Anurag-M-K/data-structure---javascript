class DoubleHashTable {
    constructor(size = 53) {
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      let prime = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * prime + value) % this.keyMap.length;
      }
      return total;
    }
  
    _hash2(key) {
      let total = 0;
      let prime = 13;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * prime + value) % this.keyMap.length;
      }
      return total;
    }
  
    set(key, value) {
      let index = this._hash(key);
      if (!this.keyMap[index]) {
        this.keyMap[index] = [[key, value]];
      } else {
        let index2 = this._hash2(key);
        this.keyMap[index].push([key, value]);
      }
    }
  
    get(key) {
      let index = this._hash(key);
      if (this.keyMap[index]) {
        for (let i = 0; i < this.keyMap[index].length; i++) {
          if (this.keyMap[index][i][0] === key) {
            return this.keyMap[index][i][1];
          }
        }
      }
      return undefined;
    }
  
    keys() {
      let keysArr = [];
      for (let i = 0; i < this.keyMap.length; i++) {
        if (this.keyMap[i]) {
          for (let j = 0; j < this.keyMap[i].length; j++) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
      return keysArr;
    }
  
    values() {
      let valuesArr = [];
      for (let i = 0; i < this.keyMap.length; i++) {
        if (this.keyMap[i]) {
          for (let j = 0; j < this.keyMap[i].length; j++) {
            if (!valuesArr.includes(this.keyMap[i][j][1])) {
              valuesArr.push(this.keyMap[i][j][1]);
            }
          }
        }
      }
      return valuesArr;
    }
  }
  
  let ht = new DoubleHashTable();
  ht.set(1, 2);
  ht.set("hi", "there");
  console.log(ht.keyMap); // [[["hello", "world"]], [["hi", "there"]]]
  console.log(ht.get("hello")); // "world"

  //poor cache perfomance 
  // no clustering
  //requires more  computation time 