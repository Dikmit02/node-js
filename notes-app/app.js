const chalk=require('chalk')
const getNotes=require('./notes.js')
const command=process.argv[2]
console.log(command);
//node app.js remove add
console.log(process.argv);//[
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\diksh\\Desktop\\node-js\\notes-app\\app.js',
//     'remove',
//     'add'
//   ]

if(command==='add'){
    console.log('Adding notes');
}
else if(command==='remove'){
    console.log('Deleting notes');
}
//node app.js remove output is Deleting notes




