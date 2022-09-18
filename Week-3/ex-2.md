- ### Call() Method 

The call() method invokes a function with a specified context. In other words, you can tie a function into an object as if it belonged to the object.

example-
```
var obj = { num: 2 };
function add(a){
  return this.num + a;
}
```
There is no property num inside the function. Thus calling this.num fails.So  To do this, use the call() method to tie the function add() momentarily to the object obj:

``` 
add.call(obj, 3);
 ```


1. Now the function add() gets its this from obj where it’s bound to.
2. When the add() function is called this.num refers to the num of the obj.
3. Thus the call returns 5 because 2 + 3 = 5

Call can also take multiple arguments
<br>

- ### Apply() Method

The apply() method does the exact same as call(). The difference is that call() accepts an argument list, but apply() accepts an array of arguments.

```
var obj = { num: 2 };

function add(a, b){
  return this.num + a + b;
}

console.log(add.apply(obj, [3, 5]));
```

- ### Bind() Method

The bind() method is reminiscent of call() and apply(). But instead of executing a function immediately, bind() returns a function that can be executed later on.

```
var obj = { num: 2 };

function add(a, b){
  return this.num + a + b;
}

const func = add.bind(obj, 3, 5);
func(); // Returns 10
```
So calling add.bind(obj, 3, 5) returns a function. In this case, you assign it to a constant called func and then run it.

Calling func() here means calling add() function on the object obj with the arguments of 3, 5.



