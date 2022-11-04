const fibSeries = {
    num:7,
     [Symbol.iterator]: function() {
        let i=0, num1=0, num2=1, temp, disp;
      
        return {
            next: () => {
                if(i++ <= this.num) { 
                    disp = num1;     
                    temp = num1 + num2;
                    num1 = num2;
                    num2 = temp; 
                    return { value: disp , done: false}
                } else {
                    return { done: true }
                }
            }
         
        }
     }
};

console.log([...fibSeries]);