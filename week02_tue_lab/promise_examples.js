console.log("Promise Examples")

var a = 100
var p1 = new Promise((resolve, reject) => {
    if( a == 10){
        resolve()
    }else{
        reject()
    }
})

p1.then(() => {
    console.log("Promise Success - I")
    //console.log("Promise Success - I")
    return "Test"
}).then( () => console.log("Promise Success - II"))
.catch(() =>  console.log("Promise Fail"))
.finally ( () => {
    console.log("Finally")
})

