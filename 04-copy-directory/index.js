const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, './files');
const pathToFileCopy = path.join(__dirname, './files-copy');
  
fs.access(pathToFileCopy, (error) => {
  if (error) {   
    fs.mkdir(pathToFileCopy, (error) => {
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

fs.readdir(pathToFile, (err, files) => {
  if(err) throw err; 
    
  files.forEach(file => {
    const pathToFiles = path.join(__dirname, './files', file);
    const pathToFilesCopy = path.join(__dirname, './files-copy', file);

    fs.copyFile(pathToFiles, pathToFilesCopy, (err) => {
      if (err) throw err;
    });
  });
});
    
