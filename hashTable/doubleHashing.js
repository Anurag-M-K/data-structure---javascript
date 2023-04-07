class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hashFunction1(key) {
    // First hash function
    return key % this.size;
  }

  hashFunction2(key) {
    // Second hash function
    // Should return a non-zero value less than this.size
    // Preferably an odd number
    return 3 - (key % 3);
  }

  insert(key, value) {
    let index = this.hashFunction1(key);
    const step = this.hashFunction2(key);
    while (this.table[index] !== undefined) {
      if (this.table[index][0] === key) {
        // Key already exists in table, update the value
        this.table[index][1] = value;
        return;
      }
      // Double hashing to find the next available index
      index = (index + step) % this.size;
    }
    // Key does not exist in table, add a new entry
    this.table[index] = [key, value];
  }

  search(key) {
    let index = this.hashFunction1(key);
    const step = this.hashFunction2(key);
    while (this.table[index] !== undefined) {
      if (this.table[index][0] === key) {
        return this.table[index][1];
      }
      // Double hashing to find the next index to check
      index = (index + step) % this.size;
    }
    return "Not Found";
  }
}

// Usage example
const table = new HashTable(5);
table.insert(3, "value1");
table.insert(7, "value2");
table.insert(3, "value3");
table.insert(41, "value9");
table.insert(44, "value8");

console.log(table.search(3)); // Output: 'value1'
console.log(table.search(7)); // Output: 'value2'
console.log(table.search(4)); // Output: 'Not Found'
                                                                                                        