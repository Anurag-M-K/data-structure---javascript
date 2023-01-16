class HashTable {
    constructor(size) {
      this.size = size;
      this.table = new Array(size);
    }
  
    hashFunction(key) {
      return key % this.size;
    }
  
    insert(key, value) {
      const index = this.hashFunction(key);
      let i = 0;
      while (this.table[index] !== undefined) {
        index = (index + i) % this.size;
        i = i+1;
      }
      this.table[index] = [key, value];
    }
  
    search(key) {
      const index = this.hashFunction(key);
      let i = 0;
      while (this.table[index] !== undefined) {
        if (this.table[index][0] === key) {
          return this.table[index][1];
        }
        index = (index + i) % this.size;
        i += 1;
      }
      return undefined;
    }
  }
  
  const table = new HashTable(10);
  table.insert(3, 'value1');
  table.insert(7, 'value2');
  table.insert(4, 'value3');
  
  console.log(table.search(3)); // Output: 'value1'
  console.log(table.search(7)); // Output: 'value2'
  console.log(table.search(4)); // Output: 'value3'