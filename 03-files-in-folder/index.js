const fs = require('fs');
const path = require('path');
let filePath = path.join(__dirname, './secret-folder');
  
fs.readdir(filePath, {withFileTypes: true}, (err, files) => {  
  if (err) {
    console.log(err);
  } else {
    files.forEach(file => {
      if (file.isFile()) {
        let filePathItem = filePath + '/' + file['name'];
        fs.stat(filePathItem, (err, stats) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log((path.basename(filePathItem, path.extname(filePathItem))) + ' - ' + ((path.extname(filePathItem)).slice(1)) + ' - ' + (stats.size));
        });
      } 
    });
  }
});
  