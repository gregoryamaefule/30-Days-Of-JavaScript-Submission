console.log("y=ax^2+bx=c=0")
const a = parseInt(prompt('Enter a:'))
const b = parseInt(prompt('Enter b:'))
const c = parseInt(prompt('Enter c:'))

console.log(`x is ${Math.floor((-b + Math.sqrt(Math.pow(b, 2) - (4*a*c))) / (2*a))} or ${Math.floor((-b + Math.sqrt(Math.pow(b, 2) - (4*a*c))) / (2*a))}`)