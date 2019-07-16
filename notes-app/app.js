const validator=require('validator')
const getNotes=require('./notes.js')
const msg=getNotes()
console.log(msg)

console.log(validator.isEmail('diksha@example.com'));

// const string=require('./notes.js')
// console.log(string)
//[Function: getNotes] output




