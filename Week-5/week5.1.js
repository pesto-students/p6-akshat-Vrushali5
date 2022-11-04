function* couter(number) {
  for (const num of number) {
    setTimeout(() => {
      if (typeof num != "string") {
        resolve(num);
      } else {
        reject(num);
      }
      console.log(num);
    }, 2000);

    yield num;
  }
}

async function resolve(num) {
  return await new Promise((res) => {
    res(num);
  });
}

async function reject(num) {
  return await new Promise((rej) => {
    rej(num);
  }).catch(console.log("Please send array of numbers"));
}

const el = couter([1, "hjj", 2]);
el.next();
el.next();
el.next();
el.next();

for(const ele of couter([1, 6, 2])){
}
