const yargs = require('yargs')
const notes=require('./notes.js') 

// const command=process.argv;
// const p=yargs.argv;
// console.log(command);
// console.log(p);

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption:true,
             type: 'string'
        }
    },
    handler(argv){
         notes.addnotes(argv.title,argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'Remove existing node',
    builder:{
        title:{
            describe:'removing a node',
            demandOption:true,
             type: 'string'

        }
    },
    handler(argv){
        notes.removeNotes(argv.title)

    }
})
yargs.command({
    command:'list',
    describe:'give the list of the notes',
    handler(){
        notes.listNodes();
    }
})
    
yargs.command({
    command:'read',
    describe:'reading the notes',
    builder:{
        title:{
            describe:'reading notes',
            demandOption:true,
            type:'string'

        }
    },
    handler(argv){
        notes.readNotes(argv.title)

    }
})
yargs.parse()

