const yargs = require('yargs')


// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        message:{
            describe: 'add msg',
            demandOption:true,
            type: 'string'
        }
    },
    handler: function (argv) {
        //console.log('Adding a new note!',argv)
       console.log('TITLE: '+argv.title);
       console.log("MSG:"+argv.message)
    }
})



yargs.parse()
// console.log(yargs.argv)
