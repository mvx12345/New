// Parent class
class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    describe() {
        return `${this.name} is a ${this.type}.`;
    }

    speak() {
        return `${this.name} makes a sound.`;
    }
}

// Child class inheriting from Animal
class Dog extends Animal {
    constructor(name, breed) {
        // Reusing the constructor of the parent class
        super(name, "dog");
        this.breed = breed;
    }

    // Overriding the speak method
    speak() {
        return `${this.name} barks.`;
    }
}

// Another Child class inheriting from Animal
class Cat extends Animal {
    constructor(name, color) {
        // Reusing the constructor of the parent class
        super(name, "cat");
        this.color = color;
    }

    // Overriding the speak method
    speak() {
        return `${this.name} meows.`;
    }

}

// Creating instances of each class
const dog = new Dog("Buddy", "Golden Retriever");
const cat = new Cat("Whiskers", "White");

// Using the parent class method and the child class-specific methods
console.log(dog.describe());  // Output: Buddy is a dog.
console.log(dog.speak());     // Output: Buddy barks.

console.log(cat.describe());  // Output: Whiskers is a cat.
console.log(cat.speak());     // Output: Whiskers meows.
