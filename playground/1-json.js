 const fs=require('fs')
// const book={
//     title:"wings of fire",
//     autho:"Dr. A P J Abdul Kalam"

// }
// const bookJSOn=JSON.stringify(book);
// //console.log(bookJSOn);//{"title":"wings of fire","autho":"Dr. A P J Abdul Kalam"}

// // writing the json object to another file
// fs.writeFileSync('1-json.json',bookJSOn)






const dataBuffer=fs.readFileSync('1-json.json')
const dataJSON=dataBuffer.toString()
const data=JSON.parse(dataJSON)
console.log(data);
console.log(data.title);
console.log(data.author);