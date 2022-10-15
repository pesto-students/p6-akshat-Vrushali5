function memoize(fun) {
    const cache = new Map();
    return function(...args) {
        const key = args.toString();
        if(cache.has(key)) {
            return cache.get(key);
        } else {
            cache.set(key, fun(...args));
            return cache.get(key);
        }
    }
}

function add(a,b) {
    if(a,b){
        return a + b;
    } else {
        return a;
    }
   
}


function time(fun) {
    console.time();
    fun();
    console.timeEnd();
}

const memoizeAdd = memoize(add);

console.log( memoizeAdd(100,100));
time(() => memoizeAdd(100,100));

console.log( memoizeAdd(100));
time(() => memoizeAdd(100));

console.log( memoizeAdd(100,200));
time(() => memoizeAdd(100,200));

console.log( memoizeAdd(100,100));
time(() => memoizeAdd(100,100));

