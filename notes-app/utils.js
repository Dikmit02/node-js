console.log('util.js')
let place ="delhi"

function add(x,y){
    return x+y
}

// every variable has it own file scope 
// in ordre to call place in app.js file we have to create 
module.exports=place;

