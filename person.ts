class Person {
    private name: string;
    private age: number;


    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }

    public tellMyName(): string {
        return this.name;
    }

    public tellMyAge(): number {
        return this.age;
    }
}

const person1 = new Person('Bob', 35);
const person2 = new Person('Roger', 75);


console.log(`Hello, my name is ${person1.tellMyName()} i have ${person1.tellMyAge()} years old`)

console.log(`Hello, my name is ${person2.tellMyName()} i have ${person2.tellMyAge()} years old`)

// don't need while for 2 persons 

