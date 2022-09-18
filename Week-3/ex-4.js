function createStack() {
    const items = [];
    return {
      push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      }
    };
  }
  const stack = createStack();
  stack.push(10);
  stack.push(5);
  stack.pop(); // => 5
  stack.items; // => undefined

//   items has been moved to a variable inside createStack() scope.
//   items is now a private variable, and the stack is encapsulated:
//   only push() and pop() method are public.
