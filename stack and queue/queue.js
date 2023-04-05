class Queue{
    constructor(){
        this.elements = {}
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    //add an element to the back of the queue
    enqueue(element){
        this.elements[this.backIndex++] = element;
    }

    //remove and return the element  at the front of the queue
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        const element = this.elements[this.frontIndex];
        delete this.elements[this.frontIndex++];
        return element;
    }

    //return the element at the front of the queue without removing it
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.elements[this.frontIndex];
    }

    //return the number of elements currently in th equeue
    size(){
        return this.backIndex - this.frontIndex;
    }

    //return true if the queue is empty , false otherwise
    isEmpty(){
        return this.size() === 0;
    }

    //remove all elements from the queue
    clear(){
        this.elements = {}
        this.frontIndex = 0;
        this.backIndex = 0;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.size()); // Output: 3
console.log(queue.peek()); // Output: 1
console.log(queue.dequeue()); // Output: 1
console.log(queue.size()); // Output: 2
queue.clear();
console.log(queue.isEmpty()); // Output: true