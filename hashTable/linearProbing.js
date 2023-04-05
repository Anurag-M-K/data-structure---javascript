class HashTable {
  constructor(size) {
    this.size = size;
    this.keys = new Array(size);
    this.values = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  insert(key, value) {
    let index = this.hash(key);
    while (this.keys[index] !== undefined) {
      if (this.keys[index] === key) {
        this.values[index] = value;
        return;
      }
      index = (index + 1) % this.size;
    }
    this.keys[index] = key;
    this.values[index] = value;
  }

  get(key) {
    let index = this.hash(key);
    while (this.keys[index] !== undefined) {
      if (this.keys[index] === key) {
        return this.values[index];
      }
      index = (index + 1) % this.size;
    }
    return undefined;
  }
}

  
  const table = new HashTable(10);
  table.insert("a", 'value1');
  table.insert("a", 'value2');
  // table.insert("a", 'value2');
  // table.insert("a", 'value3');
  // table.insert("a", 'value4');
  // table.insert("a", 'value5');
  // table.insert("a", 'value66');
  // table.insert("a", 'value7');
  // table.insert("a", 'value8');
  // table.insert("a", 'value9');
  // table.insert("a", 'value0');
 
  // easy to implement
  //best cache perform
  //suffers from clustering