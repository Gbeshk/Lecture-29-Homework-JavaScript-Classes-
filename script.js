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

let car1 = new Car("Toyota", 180, "Corolla");
let car2 = new Car("BMW", 220, "X5");

car1.describe();
car2.describe();

class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  static filterByCategory(products, category) {
    let filteredProducts = [];
    for (i = 0; i < products.length(); i++) {
      if (products[i].category === category) {
        staticProducts.push(products[i]);
      }
    }
    return staticProducts;
  }
}

let product1 = new Product("Laptop", 1000, "electronics");
let product2 = new Product("Shirt", 30, "clothing");

let product3 = new Product("Smartphone", 500, "electronics");

let electronicsProducts = Product.filterByCategory(
  [product1, product2, product3],
  "electronics"
);
console.log(electronicsProducts);
