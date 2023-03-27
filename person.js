var Person = /** @class */ (function () {
    function Person(name, age) {
        this.age = age;
        this.name = name;
    }
    Person.prototype.tellMyName = function () {
        return this.name;
    };
    Person.prototype.tellMyAge = function () {
        return this.age;
    };
    return Person;
}());
var person1 = new Person('Bob', 35);
var person2 = new Person('Roger', 75);
console.log("Hello, my name is ".concat(person1.tellMyName(), " i have ").concat(person1.tellMyAge(), " years old"));
console.log("Hello, my name is ".concat(person2.tellMyName(), " i have ").concat(person2.tellMyAge(), " years old"));
// don't need while for 2 persons 
