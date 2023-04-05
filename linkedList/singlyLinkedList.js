class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class singlyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
      if(!this.head){
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }

    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val)
            current = current.next;
        }
    
    }

    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail. next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;

        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index,val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var prev = null;
        var next;
        for (var i = 0; i < this.length; i++) {
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
        }
        return this;
      }
      reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var prev = null;
        var next;
        for (var i = 0; i < this.length; i++) {
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
        }
        return this;
      }
      
};
var list = new singlyLinkedList() 

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)
list.push(8)


console.log(list.val)

