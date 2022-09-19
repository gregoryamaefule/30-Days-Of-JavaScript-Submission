const str = 'You cannot end a sentence with because because because is a conjunction';
const regex = /because/ig;
console.log(str.match(regex).length)