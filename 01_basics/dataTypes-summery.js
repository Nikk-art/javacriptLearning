//premitive 

// 7 types - string , boolean, number, bigint, symbol, undefine, null
const name = "nikk"
const age = 10
const isLoggedIn = true 
const bignumber = 13949843292342n
let car; //undefined or you can write like this [let car = undefined ;]
let temperature = null;
const id1 = Symbol("123")
const id2 = Symbol("123")

console.log(id1 === id2);

// referance (non-premitive)
// Array, object, funtion


const myArray =  ["ram","sham","nikk"];
const myObj = {
    name : "ram",
    age : 1000,
    beautiful : true
}

const myFunction = function (){
    console.log("namaskar duniya");
}

console.log(typeof myArray)
console.log(typeof myObj)
console.log(typeof myFunction)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack (premitive) , heap (referance)

let myName = "nikk" ;

let myNickName = myName;

myNickName = "Nikya";
console.log(myName);
console.log(myNickName);

let userOne = {
    email : "oes02.com",
    age : 23

}
let usertWO = userOne;

usertWO.email = "oes@google.com";

console.log(userOne.email)
console.log(usertWO.email)
