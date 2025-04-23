//                                            Classes

// class Employee {
//     constructor(name, salary, age, dateOfJoining){
//         this.name = name;
//         this.salary = salary;
//         this.age = age;
//         this.dateOfJoining = dateOfJoining;
//     }
// }
// let employee1 = new Employee("John", 50000, 25, "2022-01-01");
// console.log(employee1);



//                                             Methods

// class Person {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
// }
//     greet(){
//         console.log("Hi there! I'm", this.firstName);
//     }
// }
// let person1 = new Person("John", "Doe");
// person1.greet();



//                                            Properties

// class Person {
//     #firstName;             //to make them private, we use # with them
//     #lastName;
//     constructor(firstName, lastName){
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//     }
// }
// let p = new Person("John", "Doe");
// console.log(p.firstName);
// console.log(p);



//Validation if first name starts with M otherwise we add M before their name
// constructor(firstName,lastName){
//     if(firstName.starsWith('M')){
//         this.#firstName = firstName;
//     }
//     else{
//         this.#firstname = 'M' + firstName;
//     }
//     this.#lastName = lastName;
// }



//We can make getter and setter to access private data

// class Person{
//     #firstName;
//     #lastName;
//     constructor(firstName,lastName){
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//     }
//     get firstName(){
//         return this.#firstName;
//     }

//     set firstName(firstName){
//         this.#firstName = firstName;
//     }

//     get lastName(){
//         return this.#lastName;
//     }

//     set lastName(lastName){
//         this.#lastName = lastName;
//     }
// }
// let p = new Person("John", "Doe");
// console.log(p.firstName);
// p.firstName = "Mario";
// console.log(p.firstName);
// console.log(p);



//                                            Inheritance

// class vehicle{
//     constructor(color, currentSpeed, maxSpeed){
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move(){
//         console.log("Moving at: ",this.currentSpeed);
//     }
//     accelerate(amount){
//         if(this.currentSpeed < this.maxSpeed){
//             this.currentSpeed += amount;
//         }
//     }
// }
// class motorCycle extends vehicle{
//     constructor(color, currentSpeed, maxSpeed,fuel){
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie(){
//         console.log("I'm doing a wheelie!");
//     }
// }
// let motorCycle1 = new motorCycle("red", 0, 100, "petrol");
// motorCycle1.move();
// motorCycle1.accelerate(50);
// motorCycle1.move();
// motorCycle1.doWheelie();


//                                           Prototypes

// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     greet(){
//         console.log("Hi there! I'm", this.firstName);
//     }
// }
// Person.prototype.introduce = function(){
//     console.log("Hi, I'm", this.firstName);
// }
// Person.prototype.favouriteColor = "blue";
// let person1 = new Person("John", "Doe");
// console.log(person1.favouriteColor);
// person1.introduce();



