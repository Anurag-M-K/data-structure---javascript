class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null
    }
    
}
class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(data){
        const newNode = new Node(data);
        if(this.head === null ){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++;
    }
    pop(){
        if(this.length ===0){
            return "nothing to pop";
        }
        const lastNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = lastNode.prev;
            this.tail.next = null;
        }
        this.length--;
        return lastNode.data;
    }
    unshift(data){
        const newNode = new Node(data);
        if(this.head === null){
            this.head =newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++
    }
    shift(){
        if(!this.head){
            return undefined;
        }
        const removeNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
            removeNode.next = null;
        }
        this.length--;
        return removeNode.value;
    }
}