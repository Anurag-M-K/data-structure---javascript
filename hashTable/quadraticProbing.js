class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hashFunction(key) {
        // Hash function to map the key to an index
        return key % this.size;
    }

    insert(key, value) {
        const index = this.hashFunction(key);
        let i = 1;
        while (this.table[index] !== undefined) {
          if (this.table[index][0] === key) {
            // Key already exists in table, update the value
            this.table[index][1] = value;
            return;
          }
          // Quadratic probing to find the next available index
          index = (index + i ** 2) % this.size;
          i += 1;
        }
        // Key does not exist in table, add a new entry
        this.table[index] = [key, value];
      }
      

    search(key) {
        var index = this.hashFunction(key);
        let i = 1;
        while (this.table[index] !== undefined) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }
            // Quadratic probing to find the next index to check
            index = (index + i ** 2) % this.size;
            i += 1;
        }
        return "Not Founded";
    }
}

const table = new HashTable(5);
table.insert(3, 'value1');
table.insert(7, 'value2');
table.insert(3, 'value3');
table.insert(41, 'value9');
table.insert(44, 'value8');


console.log(table.search(3)); // Output: 'value1'
console.log(table.search(7)); // Output: 'value2'
console.log(table.search(4)); // Output: ''not found

//average cache perfomance
//suffers a lesser clustering than linear probing