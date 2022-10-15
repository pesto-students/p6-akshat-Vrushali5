function createIncrement() {
    let count=0;
    function increment() {
        count++;
    }
    let message=`Count is ${count}`;
    function log() {
        console.log(message);
    }
    return[increment,log];
}
const[increment,log] =createIncrement();
increment();
increment();
increment();
log();// What is logged?
// OUTPUT: Count is 0

/**
 * EXplaination:- The increment function is not returning anything and since the count in 
 * increment function is only bounded inside the increment function, hence the updated value
 * is not accessed beyond it's scope so the count is displayed as 0 in log()
 */

