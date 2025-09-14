console.log("Week02 - Tuesday Lab Callback() Examples")

//Arrow function

//Single Paramater version - 0
function greet(name) {
    return `Welcome, ${name}`
}

let r = greet("Pritesh")
console.log(r)

//Single Paramater version - 1
var hello = function (name) {
    return `Welcome, ${name}`
}

//Single Paramater version - 2
var hello = (name) => {
    return `Welcome, ${name}`
}

//Single Paramater version - 3
var hello = name => {
    return `Welcome, ${name}`
}

//Single Paramater version - 4
var hello = name => {
     `Welcome, ${name}`
}

//Single Paramater version - 5
var hello = name => `Welcome, ${name}`

//No parameter
var sayHello = () => "Hello World"

//Callback

function f1() {
    console.log("F1")
}

function sum(a,b) {
    let c = a + b
    console.log(`SUM: ${c}`)
    return c
}

//call the functions
function callback(x, f) {
    if(x >=10){
        f()
    }
}

callback(1, f1)
callback(12, f1)

//call the functions
function callbackSum(x, y, add) {
    if(x > 0 && y > 0){
        add(x, y)
    }else{
        console.log("x and y must be > 0")
    }
}

callbackSum(10, 20, sum)
callbackSum(10, 0, sum)

function testCallBack(x, success, fail) {
    if(x == 10)
        success()
    else
        fail()
}

//test((n) => { console.log(n) })

let a = 10
testCallBack(a, 
        () => console.log("Success Called"),
        () => {console.log("Fail Called")}
        )
