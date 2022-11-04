const getNumber = (ms) => {
    let randomNumber = Math.round(Math.random() * 100);
    console.log(randomNumber)
    setTimeout(() => {
        if(randomNumber%5 == 0 && randomNumber != 0){
            resolve(randomNumber);
           
        } else {
           reject(randomNumber)
        }
        
    }, ms)
}

async function resolve(randomNumber) {             
    return await new Promise((res) => res(randomNumber)).then(console.log(`The ${randomNumber} is divisible by 5 `));
    
}
async function reject(randomNumber) {
    return await new Promise((rej) => rej(randomNumber)).catch(console.log(`Error! The ${randomNumber} is not divisible by 5 `));
}

getNumber(1000);
