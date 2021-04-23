const fs = require('fs');
const path = require('path')
//File system
// fs.mkdir(path.join(__dirname, 'TEST'), error => {
//     if (error) throw error;
//     console.log('Folder was created');
// })

fs.writeFile(path.join(__dirname, 'TEST', 'myNotes.txt'), "Heello",
 error => {
    if(error) throw error;
    console.log('FILE WAS CREATED');

    fs.appendFile(path.join(__dirname, 'TEST', 'myNotes.txt'), "hRLLO2",
    error => {
        if(error) throw error;
        console.log('FILE WAS EDITED');
     } )

    fs.readFile(
        path.join(__dirname, 'TEST', 'myNotes.txt'), 'utf-8',
        (error, data) => {
            if(error) throw error; 
            console.log(data);
        }
    );
 } )

fs.rename(
    path.join(__dirname, 'TEST', 'myNotes.txt'),
    path.join(__dirname, 'TEST', 'notes.txt'),
    err => {
        if (err) throw error;
        console.log('FILE WAS RENAMED');
    }
 )
