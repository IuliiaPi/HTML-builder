const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname, './files');
let filePathCopy = path.join(__dirname, './files-copy');
  
fs.access(filePathCopy, (error) => {
  if (error) {
   
    fs.mkdir(filePathCopy, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('New Directory created successfully !');
      }
    });
  } else {
    console.log('Given Directory already exists !');
  }
});
fs.readdir(filePath, (err, files) => {
  if(err) throw err; 
    
  files.forEach(file => {
    let filesPath = path.join(__dirname, './files', file);
    let filesPathCopy = path.join(__dirname, './files-copy', file);

    fs.copyFile(filesPath, filesPathCopy, (err) => {
      if (err) throw err;
    });
  });
});
    
