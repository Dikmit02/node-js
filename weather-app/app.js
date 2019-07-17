const request=require('request')
const url='https://api.darksky.net/forecast/1e4f60a6b5a12f81c5ec15e25f4a0c11/37.8267,-122.4233'
request({url:url},(error,response)=>{
    
    const data=JSON.parse(response.body)
    console.log(data.currently);
})