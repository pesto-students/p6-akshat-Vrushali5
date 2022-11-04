
 /**
  * Before using explicit binding
  * @returns undefined
  */ 
function sentence(language) {
        // language = 'Javascript'
        return `Hi!, this is ${this.language}`
}

const sent = sentence('Javascript');

console.log(sent) 
// OUTPUT: Hi!, this is undefined

/**
 * Here, this keyword takes the parent i.e global reference hence returns as undefined instead of 
 * returning Javascript in sentence function.
 */

//================

/**
 * After using bind explicit function
 * @param {*} language 
 * @returns Javascript
 */
 function sentence1(language) {
    return `Hi!, this is ${this.language}`
}

const sent1 = sentence1.bind({ language: 'Javascript'});

console.log(sent1()); 
// OUTPUT: Hi!, this is Javascript

/**
 * Here, this keyword the value of language is bounded closely to sentence1() function, hence this
 * keyword takes the value of language passed inside the bind method.
 * Bind() creates a new function when called and the values passed must be in key: value pair
 */

// ==================


/**
 * After using call explicit function
 * @param {*} language 
 * @returns Javascript
 */
 function sentence2(language) {
    return `Hi!, this is ${this.language}`
}

const sent2 = sentence2.call({ language : 'Javascript'});

console.log(sent2); 
// OUTPUT: Hi!, this is Javascript

/**
 * Here, the call() method and bind() are similar as both changes the behaviour of this keyword but
 * call() does not create a new function instead it calls the function and provides the argument.
 */

// ===============

/**
 * After using apply explicit function
 * @param {*} language 
 * @returns Javascript
 */

 var language = [8, 10, 4, 7, 3];
 var max = Math.max.apply(null, language);
 
 console.log(max);

/**
 * Here, apply() method is similar to call() method except the way of parameters we pass inside apply.
 * If we have to pass dynamically the values, apply() is to be used
 */