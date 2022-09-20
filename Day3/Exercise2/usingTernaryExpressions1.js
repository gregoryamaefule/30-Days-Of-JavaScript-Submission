const FNAME = prompt('Enter Name:');
const LNAME = prompt('Enter Name:');
let res = (FNAME.length > LNAME.length) ? 'your firstname is longer than your lastname' : 'your lastname is longer than your firstname';
console.log(res)