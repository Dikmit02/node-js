const path=require('path')
const express=require('express')


const app=express();
app.set('view engine','hbs')
app.use("",express.static(path.join(__dirname,'/public')))

//app.use("start url")


app.get('',(req,res)=>{
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
    // srver is setting up and it is instantly
    console.log('sever is start at port 3000');
})

