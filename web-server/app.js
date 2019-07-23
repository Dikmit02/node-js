const geocode=require('./public/src/utils/geocode')
const forecast=require('./public/src/utils/forecast')

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


app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send(error)
        }
        forecast(latitude,longitude,(error,forecastData)=>{
            if(error){
                return res.send(error)
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })

        })
    })

    // res.send({
    //     forecast:[{
    //         latitide:121,
    //         longitude:4848
    //     }],
    //     location: 'Philadelphia',
    //     address: req.query.address
    // })
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

app.listen(3000) 
