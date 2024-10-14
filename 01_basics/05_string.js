const name = "nikk";
const repoCount = 50;

console.log(name + repoCount + "variable")

console.log(`hii my name is ${name} and the repocount is ${repoCount}`);

const newString = new String("nikkbob");

console.log(newString[0]);
console.log(newString.__proto__);

console.log(newString.length);
console.log(newString.toLocaleLowerCase());

const gameName = new String('hitesh-hc-com');

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const new2String = gameName.substring(0, 4)
console.log(new2String);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
