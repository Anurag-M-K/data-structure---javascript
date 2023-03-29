class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class circularLinkedLilst {
    constructor(){
        this.head = null;
        this.length = 0;
    }
    //add an element to the end of the linked list
    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            newNode.next = this.head;
        }else{
            let current = this.head;
            while(current.next !==this.head){
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head
        }
        this.length++;

    }
    //add an element tot the beginning of the list
    prepend(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode ;
            newNode.next = this.head;
        }else{
            let current = this.head;
            while(current.next !==this.head){
                current =current.next
            }
            newNode.next = this.head;
            this.head = newNode;
            current.next = this.head; 

        }
        this.length++
    }
    //insert at specified index
    insert(index,data){
        if(index < 0 || index > this.length){
            return null
        }
        if(index === 0 ){
            return this.prepend(data)
        }
        if(index === this.length){
            return this.append(data);
        }
        const newNode =  new Node(data);
        let current = this.head;
        let previous = null;
        let count = 0;
        while(count < index){
            previous = current;
            current = current.next ;
            count++;
        }
        newNode.next = current;
        previous.next = newNode ;
        this.length++;
    }
    //remove an element at a specified index
    remove(index){
        if(index < 0 || index > this.length){
            return null;
        }
        let current = this.head;
        let previous = null;
        let count = 0;
        if(index === 0){
            while(current.next !==this.head){
                current = current.next;
            }
            this.head = this.head.next;
            current.next = this.head;
        }else{
            while(count < index){
                previous = current;
                current = current.next;
                count++
            }
            previous.next = current.next;
        }
        this.length--;
        return current.data;
    }

    //get an element at specified index

    get(index){
        if(index < 0 || index > this.length){
            return null
        }
        let current = this.head;
        let count = 0;
        while(count < index){
            current = current.next;
            count++
        }
        return current.data;
    }

    //print the list
    print(){
        let current = this.head;
        let result = '';
        if(!current){
            console.log('empty list')
        }else{
            while(current.next !== this.head){
                result += current.data + '->';
                current = current.next;
            }
            result += current.data;
            console.log(result)
        }
    }
}