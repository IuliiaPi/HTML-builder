const fs = require('fs');
const path = require('path');


let filePath = path.join(__dirname, './secret-folder');

fs.readdir(filePath, (err, files) => {
    
  if (err)
    console.log(err);
  else {
    
    files.forEach(file => {
      if (path.extname(file) == '.txt')
        fs.stat(filePath, (err, stats) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log((path.basename(filePath, path.extname(filePath))) + ' - ' + (path.extname(filePath)) + ' - ' + (stats.size));
        });
        
    });
  }
});