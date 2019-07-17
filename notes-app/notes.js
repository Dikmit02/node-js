const fs=require('fs')
const chalk=require('chalk')
function getNotes(){
    return "Your Notes..."
}
const addnotes=(title,body)=>{
    // for adding the note
     const notes=loadNotes()

     // check if title exits or not 
    //  const duplicatenotes=notes.filter(function(nott){
    //      return nott.title===title

    //  })
    const duplicatenotes=notes.find((nott)=> nott.title===title)
    // find stops as soon as the first element is found
     if(!duplicatenotes){
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

const removeNotes=(title)=>{
     const notedik=loadNotes()
    //  const notesToKeep=notedik.filter(function(nott){
    //      return nott.title!==title

    //  })

    const notesToKeep=notedik.filter((nott)=>nott.title!==title)

     if(notedik.length>notesToKeep.length){
         console.log(chalk.green.inverse('NOTE REMOVED'));
         saveNotes(notesToKeep)
     }
     else{
        console.log(chalk.red.inverse('NOTE NOT FOUND'));
     }
    
}

const listNodes=()=>{
    const notes=loadNotes();
    console.log(chalk.white.inverse("YOUR NOTES!!!!"));
    notes.forEach(element => {
        console.log(chalk.blue(element.title)+"   "+chalk.red(element.body));
        
    });
    

}
const readNotes=(title)=>{
    const notes=loadNotes();
    const noteyy=notes.find((note)=>(note.title===title))

    if(noteyy){
        console.log(chalk.inverse(noteyy.title));
        console.log(noteyy.body);
    }
    else{
        console.log(chalk.red.inverse('note not found'));
    }

}

const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}

const loadNotes=()=>{
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
    removeNotes:removeNotes,
    listNodes:listNodes,
    readNotes:readNotes
}