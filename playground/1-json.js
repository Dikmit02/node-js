 const fs=require('fs')
const dataBuffer=fs.readFileSync('1-json.json')
const dataJSON=dataBuffer.toString()
const data=JSON.parse(dataJSON)

data.name="diksha"
data.age=4
const dataJSON=JSON.stringify/9(data);
fs.writeFileSync('i-json.json',dataJSON)