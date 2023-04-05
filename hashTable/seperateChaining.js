class HashTable {
    constructor(size){
        this.keyMap = Array(size)
        this.numKeyMap  = this.keyMap.length;
    }
    hash(key){
        let total = 0;
        let WEIRD_PRIME=31;
        for(let i = 0; i<Math.min(key.length,100); i++){
            let char = key[i];
            let value = char.charCodeAt(0)-96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    insert(key,value){
        const newNode = {key,value,next:null};
        const index = this.hash(key)

        if(!this.keyMap[index]){
            this.keyMap[index] = newNode;
        }else{
            let currentNode = this.keyMap[index];
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }
}

