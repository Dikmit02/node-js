const yargs = require('yargs')
const notes=require('./notes.js') 

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

    handler: function (argv) {
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
    handler:function(argv){
        notes.removeNotes(argv.title)

    }
})
yargs.parse()

