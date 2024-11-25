// 1. შექმენი კლასი Person, რომელსაც ექნება name და age ატრიბუტები. დაამატე მეთოდი introduce(), რომელიც დააბრუნებს ტექსტს:
// Hello, my name is [name] and I am [age] years old.

// 2. დაამატე სტატიკური მეთოდი isAdult(age) კლასთან Person, რომელიც დააბრუნებს true თუ ასაკი მეტია ან ტოლია 18-ის და false - წინააღმდეგ შემთხვევაში.
// დავალება: შექმენი ახალი ობიექტი და შეამოწმე ეს სტატიკური მეთოდი.
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

// 3. კლასების მემკვიდრეობა (Inheritance)
// შექმენი კლასი Animal, რომელსაც ექნება name და მეთოდი speak(). შექმენი შვილობილი კლასი Dog, რომელსაც ექნება მეთოდი speak(), რომელიც დააბრუნებს: [name] says: Woof!
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

// 4. DOM-ის გამოყენება
// შექმენი კლასი Button, რომელსაც ექნება label და color პარამეტრები კონსტრუქტორში. დაამატე მეთოდი render(containerId), რომელიც შეიქმნის ღილაკს შესაბამისი ფერით და ტექსტით და დაამატებს კონტეინერში.
// დავალება: შექმენი ორი ღილაკი და დაამატე div ელემენტში.
let div = document.createElement("div");
class Button {
  constructor(label, color) {
    this.label = label;
    this.color = color;
  }

  render(containerId) {
    let button = document.createElement("button");
    button.textContent = this.label;
    button.style.backgroundColor = this.color;
    document.body.appendChild(div);
  }
}
let button1 = new Button("Click Me", "blue");
let button2 = new Button("Click Me", "red");

button1.render();
button2.render();

// 5. შექმენი კლასი Vehicle, რომელსაც ექნება brand და speed ატრიბუტები და მეთოდი describe(). შემდეგ შექმენი Car კლასი, რომელიც მემკვიდრეობით მიიღებს Vehicle-ს და დაამატე თვისება model.
// დავალება: შექმენი რამდენიმე Car ობიექტი და დაიბეჭდე მათი მონაცემები.
class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  describe() {
    console.log(this.brand, this.speed);
  }
}

class Car extends Vehicle {
  constructor(brand, speed, model) {
    super(brand, speed);
    this.model = model;
  }
  describe() {
    console.log(this.model, this.brand, this.speed);
  }
}

let car1 = new Car("mersedesi", 200, "bolo");
let car2 = new Car("bmw", 220, "boloswina");

car1.describe();
car2.describe();

// 6. შექმენი კლასი Product, რომელსაც ექნება name, price და category ატრიბუტები. დაამატე სტატიკური მეთოდი filterByCategory(products, category), რომელიც გამოიყვანს კონკრეტული კატეგორიის პროდუქტებს.
// დავალება: შექმენი რამდენიმე პროდუქტი და ფილტრაციით აჩვენე მხოლოდ electronics კატეგორიის პროდუქტები.
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

// 7. შექმენი კლასი Event, რომელსაც ექნება name და date ატრიბუტები. დაამატე მეთოდი isUpcoming(), რომელიც დაადგენს, ღონისძიება მომავალშია თუ არა.
// დავალება: დაამატე რამდენიმე ღონისძიება და შეამოწმე ისინი.

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

let event1 = new Event("meeting1", "2022-01-01");
let event2 = new Event("meeting2", "2025-01-01");

console.log(event1.isUpcoming());
console.log(event2.isUpcoming());

// 8. შექმენი კლასი Character, რომელსაც ექნება name და health თვისებები. შექმენი შვილობილი კლასი Warrior, რომელსაც დაემატება attack() მეთოდი, რომელიც შეამცირებს health-ს 10-ით.
// დავალება: შექმენი ორი პერსონაჟი და გამოიყენე მათი attack() მეთოდი.
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


// 9. შექმენი კლასი Task, რომელსაც ექნება title, completed და priority ატრიბუტები. დაამატე მეთოდი toggleCompleted(), რომელიც შეცვლის ტასქის სტატუსს (completed).
// დაამატე სტატიკური მეთოდი filterByPriority(tasks, priority), რომელიც დააბრუნებს მხოლოდ იმ ტასქებს, რომლებსაც შესაბამისი პრიორიტეტი აქვთ.
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

// 10. შექმენი კლასი Appointment, რომელსაც ექნება title და date ატრიბუტები. დაამატე მეთოდი isToday(), რომელიც დააბრუნებს true, თუ ღონისძიება დღეს უნდა გაიმართოს და false, წინააღმდეგ შემთხვევაში.
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
