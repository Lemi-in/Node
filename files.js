const fs = require('fs');

// Reading files

fs.readFile('./docs/blog1.txt', (err, data) => {

    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line');


// Writing files
// fs.writeFile('./docs/blog2.txt', 'Hello, Elijah', () => {
//     console.log('file was written');
// });  // creates a new file if it doesn't exist, and writes to it if it does exist

// //directories
// fs.mkdir('./assets', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('folder created');
// });

// // deleting files
// if (fs.existsSync('./streams.js'))     {
//     fs.unlink('./streams.js', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('file deleted');
//     });
// } else {        
//     console.log('file does not exist');
// }   // checks if file exists, and if it does, deletes it

// fs.mkdir('./streams.js', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('file created');
// });  // creates a new file