const fs=require('fs')
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
        console.log("new note added");
     }
     else{
         console.log("node titile taken!");
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
    addnotes: addnotes
}