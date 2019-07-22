const path=require('path')
const express=require('express')


const app=express();


//Define path foe Express config
const publicDirectoryPath=path.join(__dirname,'/public')



//Setup handlebars engine and views location
app.set('view engine','hbs')


//Setup handlebars engine and views  location
app.use("/m",express.static(publicDirectoryPath))


//app.use("start url")
// app.use('/m',(req,res)=>{
//     res.send('hello')
// })


app.get('/a',(req,res)=>{
    res.render('index',{
        title:'Weather app',
        name:'Diksha'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name:'Diksha Mittal'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        forecat:[{
            latitide:121,
            longitude:4848
        }]
    })
})


app.listen(3000,()=>{
    
})

// C:\Users\diksh\Desktop\node-js\web-server>node app.js
// DIKSHAAAC:\Users\diksh\Desktop\node-js\web-server
// mmmmmC:\Users\diksh\Desktop\node-js\web-server\public
// jnfjnC:\Users\diksh\Desktop\node-js\web-server\public
// MITTALC:\Users\diksh\Desktop\node-js\public