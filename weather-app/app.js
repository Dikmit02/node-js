
 const geocode=require('./utils/geocode')
 const forecast=require('./utils/forecast')

const add=process.argv[2]

if(!add){
   console.log('Please provide an address');
}
else{
geocode(add,(error,{latitude,longitude,location})=>{
  
   if(error){
      return console.log('Error',error);
   }
   forecast(latitude,longitude,(error,forecastdata)=>{
      if(error){
         console.log('Error',error);
      }
      console.log(location);
       console.log(forecastdata);
   })

// console.log('Error',error);
// console.log('Data',data);
})
 


}