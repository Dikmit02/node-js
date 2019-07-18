
 const geocode=require('./utils/geocode')
 const forecast=require('./utils/forecast')

const add=proces.argv[2]

if(!add){
   console.log('Please provide an address');
}
else{
geocode(add,(error,data)=>{
  
   if(error){
      return console.log('Error',error);
   }
   forecast(data.latitude,data.longitude,(error,forecastdata)=>{
      if(error){
         console.log('Error',error);
      }
      console.log(data.location);
       console.log(forecastdata);
   })

// console.log('Error',error);
// console.log('Data',data);
})
 


}