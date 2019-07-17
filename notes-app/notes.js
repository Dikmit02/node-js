const fs=require('fs')
const chalk=require('chalk')
function getNotes(){
    return "Your Notes..."
}
const addnotes=function(title,body){
    // for adding the note
     const notes=loadNotes()

     // check if title exits or not 
     const duplicatenotes=notes.filter(function(nott){
         return nott.title===title

     })
     if(duplicatenotes.length===0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.blue.inverse("new note added"));
     }
     else{
         console.log(chalk.pink.inverse("node titile taken!"));
     }
     
     
}

const removeNotes=function(title){
     const notedik=loadNotes()
     const notesToKeep=notedik.filter(function(nott){
         return nott.title!==title

     })

     if(notedik.length>notesToKeep.length){
         console.log(chalk.green.inverse('NOTE REMOVED'));
         saveNotes(notesToKeep)
     }
     else{
        console.log(chalk.red.inverse('NOTE NOT FOUND'));
     }
    
}

const saveNotes=function(notes){
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}

const loadNotes=function(){
    try{ 
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON)
    } 
    catch(e){
        return []
    }    
}
module.exports={
    getNotes: getNotes,
    addnotes: addnotes,
    removeNotes:removeNotes
}