const str = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const regex = /\d+(?= euro)/gi;
let array = str.match(regex)
let sum = 0
for (const element of array){
    sum += parseInt(element)
}
console.log(sum)