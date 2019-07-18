const express=require('express')
const app=express();

//app.com
//app.com/help
//app.com/about

app.get('',(req,res)=>{
    // for app.com
    // req-request
    // res-response
    res.send('Hello express')
})
app.get('/help',(req,res)=>{
    res.send('Help page')
})
app.get('/weather',(req,res)=>{
    res.send('weather')
})
app.get('/about',(req,res)=>{
    res.send('about page')
})

app.listen(3000,()=>{
    // srver is setting up and it is instantly
    console.log('sever is start at port 3000');
})

