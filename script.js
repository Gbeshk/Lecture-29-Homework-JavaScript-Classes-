class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
  static isAdult(age) {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  }
}
let people = new Person("giorgi", 18);
console.log(people.introduce());
console.log(Person.isAdult(people.age));

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} says: Woof!`);
  }
}
let dog = new Dog("jeka");
dog.speak();

class Button {
  constructor(label, color) {
    this.label = label;
    this.color = color;
  }

  render(containerId) {
    let button = document.createElement("button");
    button.textContent = this.label;
    button.style.backgroundColor = this.color;
    let div = document.createElement("div");
    document.body.appendChild(div);
    div.appendChild(button);
  }
}
let button1 = new Button("Click Me", "blue");
let button2 = new Button("Click Me", "red");

button1.render();
button2.render();

class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  describe() {
    console.log(`vehicle: ${this.brand}, speed: ${this.speed} km/h.`);
  }
}

class Car extends Vehicle {
  constructor(brand, speed, model) {
    super(brand, speed);
    this.model = model;
  }
  describe() {
    console.log(`${this.model} is  ${this.brand}, speed: ${this.speed} km/h.`);
  }
}

let car1 = new Car("mersedesi", 200, "bolo");
let car2 = new Car("bmw", 220, "boloswina");

car1.describe();
car2.describe();

class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  static filterByCategory(products, category) {
    return products.filter((product) => product.category === category);
  }
}

let product1 = new Product("iphone", 1000, "electronics");
let product2 = new Product("bmw", 1500, "manqana");
let product3 = new Product("samsung", 900, "electronics ");

let electronics = Product.filterByCategory(
  [product1, product2, product3],
  "electronics "
);
console.log(electronics);

class Event {
  constructor(name, date) {
    this.name = name;
    this.date = date;
  }

  isUpcoming() {
    let date1 = new Date();
    let date2 = new Date(this.date);
    if (date1 > date2) {
      return "momavalshia";
    } else {
      return "ar aris momavalshi";
    }
  }
}

const event1 = new Event("Conference", "2022-01-01");
const event2 = new Event("Meeting", "2025-01-01");

console.log(event1.isUpcoming());
console.log(event2.isUpcoming());

class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
}

class Warrior extends Character {
  attack() {
    this.health = this.health - 10;
  }
}

let warrior1 = new Warrior("giorgi", 100);
warrior1.attack();

let warrior2 = new Warrior("luka", 100);
warrior2.attack();
console.log(warrior1.health);
console.log(warrior2.health);

class Task {
  constructor(title, completed, priority) {
    this.title = title;
    this.completed = completed;
    this.priority = priority;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  static filterByCategory(tasks, priority) {
    return tasks.filter((task) => task.priority === priority);
  }
}

let task1 = new Task("todos awyoba", false, "Medium");
task1.toggleCompleted();
let task2 = new Task("todos awyoba2", true, "Important");
task2.toggleCompleted();
let task3 = new Task("todos awyoba3", true, "Low");
task3.toggleCompleted();

let filtered = Task.filterByCategory([task1, task2, task3], "Low");
console.log(filtered);

class Appointment {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  isToday() {
    let date1 = new Date();
    let date2 = new Date(this.date);
    return date1.toDateString() == date2.toDateString();
  }
}

let appointment1 = new Appointment("todos gaketeba", "2025-11-26");
let appointment2 = new Appointment("todos gaketeba 2", "2024-11-26");

console.log(appointment1.isToday());
console.log(appointment2.isToday());
