const path=require('path')
const express=require('express')
const hbs=require('hbs')

const app=express();


//Define path foe Express config
const publicDirectoryPath=path.join(__dirname,'/public')
const partialPath=path.join(__dirname,'/partials')


//Setup handlebars engine and views location
app.set('view engine','hbs')
hbs.registerPartials(partialPath)

//Setup handlebars engine and views  location
app.use("/",express.static(publicDirectoryPath))



app.get('/',(req,res)=>{
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

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Diksha Mittal'
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
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Diksha MIttal',
        errormessage:'Help article not found'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Diksha Mittal',
        errormessage:'Page not found'
    })
})

app.listen(1234) 
