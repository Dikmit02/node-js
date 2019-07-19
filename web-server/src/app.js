const path=require('path')
const express=require('express')


const app=express();
app.use(express.static(path.join(__dirname,'../public')))




app.get('/weather',(req,res)=>{
    res.send({
        forecat:[{
            latitide:121,
            longitude:4848
        }]
    })
})


app.listen(3000,()=>{
    // srver is setting up and it is instantly
    console.log('sever is start at port 3000');
})

