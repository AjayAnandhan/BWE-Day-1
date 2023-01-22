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
    isMale : true}
]

console.log(nesArr[0])
console.log(nesArr[0].name)
console.log(nesArr[1].name)
console.log(nesArr)