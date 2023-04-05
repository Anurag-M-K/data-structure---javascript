const stack = (function() {
    const elements = []; // Initialize an empty array to hold the elements of the stack
    let top = -1; // Initialize the top pointer to -1 to indicate an empty stack
  
    // Define the push operation to add an element to the top of the stack
    function push(element) {
      top++;
      elements[top] = element;
    }
  
    // Define the pop operation to remove and return the top element from the stack
    function pop() {
      if (top === -1) {
        return undefined; // Return undefined if the stack is empty
      }
      const poppedElement = elements[top]; // Get the top element of the stack
      delete elements[top]; // Remove the top element from the stack
      top--; // Decrement the top pointer
      return poppedElement; // Return the popped element
    }
  
    // Define the peek operation to return the top element of the stack without removing it
    function peek() {
      if (top === -1) {
        return undefined; // Return undefined if the stack is empty
      }
      return elements[top]; // Return the top element of the stack
    }
  
    // Define the isEmpty operation to check if the stack is empty
    function isEmpty() {
      return top === -1; // Return true if the top pointer is -1, indicating an empty stack
    }
  
    // Return an object with the push, pop, peek, and isEmpty operations as its properties
    return {
      push,
      pop,
      peek,
      isEmpty
    };
  })();
  
  // Push some elements onto the stack
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  // Pop the top element off the stack and print it
  console.log(stack.pop()); // Output: 3
  
  // Peek at the top element without removing it
  console.log(stack.peek()); // Output: 2
  
  // Check if the stack is empty
  console.log(stack.isEmpty()); // Output: false
  