const request=require('request')

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZGlrc2hhbWl0dGFsIiwiYSI6ImNqeTdvZGp2OTAxbWMzbXFsbndnN29yOXAifQ.Sn5xZqzPGFqKEhM3tc1S0A'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to weather service!!!',undefined)
        }
        else if(response.body.features.length==0){
            callback('unable to find the loaction',undefined);
        }
        else{
            callback(undefined,{
                latitude: response.body.features[0].center[0],
            longitude: response.body.features[0].center[1],
            location: response.body.features[0].place_name
            })
        }

    })

}


// const url='https://api.mapbox.com/geocoding/v5/mapbox.places/New%20Delhi.json?access_token=pk.eyJ1IjoiZGlrc2hhbWl0dGFsIiwiYSI6ImNqeTdvZGp2OTAxbWMzbXFsbndnN29yOXAifQ.Sn5xZqzPGFqKEhM3tc1S0A'
// request({url:url,json:true},(error,response)=>{
   

// if(error){
//    console.log('Unable to connect to weather service!!!');
// }
// else if(response.body.features.length==0){
//    //const url='https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoiZGlrc2hhbWl0dGFsIiwiYSI6ImNqeTdvZGp2OTAxbWMzbXFsbndnN29yOXAifQ.Sn5xZqzPGFqKEhM3tc1S0A'

//    console.log('unable to find the loaction');
// }
// else{
//    console.log(response.body.features[0].center[0]+' is longitude'+response.body.features[0].center[1]+' is the latitude');
   
// }
// })
module.exports=geocode