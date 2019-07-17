// const square=function(x){
//     return x*x
// }
// const square=(x)=>{
//     return x*x
// }
const square=(x)=>x*x
console.log(square(2));

// const event={
//     name:'Birthday Party',
//     printGuestList:function(){
//         console.log('Guest list for '+this.name);
//     }
// }
const event={
    name:'Birthday Party',
    printGuestList:()=>{
        console.log('Guest list for '+this.name);
        // here the this.name is undefined becaus earrow function domt bind there own this value
        //they acess the value in context in which they are craeated
        // from this we cannot refer to the object because of the this 
    }
}
const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
            // here the this.name is undefined becaus earrow function domt bind there own this value
        //they acess the value in context in which they are craeated
        })
    }
}

event.printGuestList()