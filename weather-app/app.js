const request=require('request')
//const url='https://api.darksky.net/forecast/1e4f60a6b5a12f81c5ec15e25f4a0c11/37.8267,-122.4233'
const url='https://api.mapbox.com/geocoding/v5/mapbox.places/New%20Delhi.json?access_token=pk.eyJ1IjoiZGlrc2hhbWl0dGFsIiwiYSI6ImNqeTdvZGp2OTAxbWMzbXFsbndnN29yOXAifQ.Sn5xZqzPGFqKEhM3tc1S0A'
request({url:url,json:true},(error,response)=>{
     
   debugger
   console.log(response.body.features[0].center[0]+' is longitude'+response.body.features[0].center[1]+' is the latitude');
   
})