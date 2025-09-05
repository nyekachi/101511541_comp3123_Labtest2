console.log("Hello NodeJS")

//Exercise 1 : Capitalize the first letter of each word in a string
function capitalizeWords(str) {
    return str.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
console.log(capitalizeWords("the quick brown fox"));
 
//Excercise 2 : find the largest of 3 integers
function findLargest(a, b, c) {
    return Math.max(a, b, c);
}
console.log(findLargest(1, 0, 1));
console.log(findLargest(0, -10, -20));
console.log(findLargest(1000, 510, 440));

//Excercise 3 :Move last 3 characters to the start of a string
function moveLastThreeToFront(str) {
    if (str.length <= 3) {
        return str;
    }
    return str.slice(-3) + str.slice(0, -3);
}
console.log(moveLastThreeToFront("Python"));
console.log(moveLastThreeToFront("JavaScript"));
console.log(moveLastThreeToFront("Hi"));

//Excercise 4 : find the type of angle
function findAngleType(angle) {
    if (angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    }
}
console.log(findAngleType(47)); // Acute angle
console.log(findAngleType(90)); // Right angle
console.log(findAngleType(145)); // Obtuse angle
console.log(findAngleType(180)); // Straight angle



let aa = 200
var a = 100
console.log(a)

a = "Hello"
console.log(`A : ${a}`)

//
obj1 = {
    id:1,
    name:"Pritesh Patel",
    display: function(){
        //id = 2000
        console.log(this.id, this.name)
    }
}
console.log(obj1.id)
console.log(obj1["name"])
obj1.display()
console.log(typeof(obj1))
console.log(typeof(obj1.id))
console.log(typeof(obj1.name))
console.log(typeof(obj1.display))
console.log(obj1)

// function Person(){
//     this.id = 1,
//     this.name = "Zion",
//     this.result = "PASS"
// }

//ES5 fucntions/prototype based class declaration
function Person(id, name, result){
    this.id = id,
    this.name = name,
    this.result = result
}

Person.prototype.display = function(){
    console.log(this.id, this.name, this.result)
}

Person.prototype.print = function(){
    console.log(this.id, this.name, this.result)
}

var p1 = new Person(1, "Zion", "Pass")
console.log(typeof(Person))
console.log(typeof(p1))
console.log(p1.id, p1.name, p1.result)
p1.display()

//ES6 class declaration
class Student{
    constructor(id, name, result){
        this.id = id,
        this.name = name,
        this.result = result
    }
    display = function(){
        console.log(this.id, this.name, this.result)
    }
}

s1 = new Student(2, "Fred", "Pass")
s1.display()

//Spread ...

x = [ 5, 6, 7]
y = [1, 2, 3, 4, ...x, 8, 9, 10]
console.log(y)

//Map
m1 = y.map(n => n + 2)
console.log(m1)
m1 = y.map(n => {
    if(n % 2 == 0)
        return n
    else
        return "ODD"
})
console.log(m1)

//Filter
m1 = y.filter(n => {
    if(n % 2 == 0)
        return n
})
console.log(m1)

//Reduce
m1 = y.reduce((s, n) => s + n)
console.log(m1)

//Arrow functions
function sayHello(){
    console.log("Hello")
}
sayHello = () => console.log("Hello")

function sayHello(name){
    console.log(`Hello, ${name}`)
}
ayHello = name => console.log(`Hello, ${name}`)

function add(a, b){
    return a + b
}

add = (a, b) =>  { return a + b }

console.log(add(2,1))

//Object value extraction as variables

obj = {
    id: 1,
    fname: "Pritesh",
    lname: "Patel"
}

let {id:v1, fname:v2, lname} = obj
console.log(v1, v2, lname)

names = ["Pritesh", "Roman", "Jermey", "Rohan", "Roberto"]

n1 = names.filter(n => {
    if(n.length == 5){
        return n
    }
})

console.log(n1)


n1 = names.reduce((t,n) => {
    
        return  "Mr. " + t  + n
    
})

console.log(n1)