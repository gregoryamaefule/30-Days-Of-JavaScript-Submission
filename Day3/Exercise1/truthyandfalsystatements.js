//truthy statements

console.log(true && true)
console.log({} && true)
console.log([] && true)
console.log(42 && true)
console.log("0" && true)
console.log("false" && true)
console.log(new Date() && true)
console.log(-42 && true)
console.log(12n && true)
console.log(3.14 && true)
console.log(-3.14 && true)
console.log(-Infinity && true);

//falsy statements
console.log(null && true)
console.log("" && true)
console.log(0 && true)
console.log(-0 && true)
console.log(0n && true)
console.log(false && true)
console.log(undefined && true)
console.log(NaN && true)