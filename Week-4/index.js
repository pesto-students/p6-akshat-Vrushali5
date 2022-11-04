// functioncreateStack() {return{items:[],push(item) {this.items.push(item);},pop() {returnthis.items.pop();}};}conststack=createStack();stack.push(10);stack.push(5);stack.pop();// => 5stack.items;// => [10]stack.items= [10,100,1000];// Encapsulationbroken!functioncreateStack() {// Write your code here...}conststack=createStack();stack.push(10);stack.push(5);stack.pop();// => 5stack.items;// => undefined
// var items = []
function createStack() {
    let items = [];
  return {
   
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}

const stack = createStack();
// stack.push(10);
stack.push(10);
// stack.push(5);
stack.push(5);
// stack.pop();// => 5
stack.pop();
// stack.items;// => [10]
stack.items;

stack.items = [10, 100, 1000]; // Encapsulation broken!
// stack.obj.items = [10,100,1000];
console.log(stack.items);