var Person = function() {};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}

var Teacher = function() { Person.call(this)};

Teacher.prototype = Object.create(Person.prototype);


Teacher.prototype.teach = function(subject) {
    this.subject = subject;
    console.log(`${this.name} is now teaching ${subject}`);
}

var him = new Teacher();
him.initialize("Adam", 45);
him.teach("inheritance");
