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
        console.log('New Directory created successfully !!');
      }
    });
  } else {
    console.log('Given Directory already exists !!');
  }
});
fs.readdir(filePath, (err, files) => {
  if(err) throw err; 

  fs.copyFile(files, files-copy, (err) => {
    if (err) 
      throw err;
    
  });
    
});
    
