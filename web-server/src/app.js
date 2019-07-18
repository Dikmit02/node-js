const express=require('express')
const app=express();


app.get('',(req,res)=>{
    res.send('<h1>Weather</h1>')
})
app.get('/json',(req,res)=>{
    res.send({
        // sending the data and stingigy automatically
        nmae:'diksha',
        age:21,
        features:[{
            newitem:'bag',
            newnumber:56
        }]
    })
})
app.get('/help',(req,res)=>{
    res.send('<title>Help page</title>')
})
app.get('/weather',(req,res)=>{
    res.send({
        forecat:[{
            latitide:121,
            longitude:4848
        }]
    })
})
app.get('/about',(req,res)=>{
    res.send('about page')
})

app.listen(3000,()=>{
    // srver is setting up and it is instantly
    console.log('sever is start at port 3000');
})

