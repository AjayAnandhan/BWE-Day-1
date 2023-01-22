//types ofaccess in array

var arr = ["ajay"];
console.log(arr)

// add value at last index
arr.push("anandhan");
console.log(arr)

// remove value at last index
arr.pop();
console.log(arr)

// add value at first index
arr.unshift("anandhan");
console.log(arr)

// remove value at first index
arr.shift();
console.log(arr)


// Objects (key : value)
const obj = {
    name : "ajay",
    age : 22,
    isMale : true
};
console.log(obj.name)
console.log(obj)
obj.name = "anandhan";
console.log(obj.name)


// nested array
const nesArr = [
    {name : "ajay",
    age : 22,
    isMale : true},
    {    name : "anandhan",
    age : 48,
    isMale : true,
    stack : ["angular", "react"]
}
]

console.log(nesArr[0])
console.log(nesArr[0].name)
console.log(nesArr[1].name)
console.log(nesArr)
console.log(nesArr[1].stack[1])


// copy by value and copy by reference

// copy by value
var a = 10, b = a, b = 20;
console.log(a,b);

//copy by reference
const obja = {value : 10}, objb = obja;
console.log("obja = ", obja, "objb = ", objb)
objb.value = 20;
console.log("obja = ", obja, "objb = ", objb)

// windows and document objects
// js = (key : value)
// window property
console.log(window)
// document property
console.log(window.document)
console.log(document)


// XMLHttpRequest

var a = new XMLHttpRequest();
a.open("get","https://restcountries.com/v3.1/all")
a.send();
a.onload = function(){
    var b = a.response
    var c = JSON.parse(b)
    for(var obj of c){
        console.log(obj.name.common)
    }
}