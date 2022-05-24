const fs = require('fs');
const path = require('path');


let filePath = path.join(__dirname, './secret-folder');

fs.readdir(filePath, (err, files) => {
    
  if (err)
    console.log(err);
  else {
    
    files.forEach(file => {
      if ((path.extname(file) == '.txt') || (path.extname(file) == '.js') || (path.extname(file) == '.css') || (path.extname(file) == '.csv'))
        fs.stat(filePath, (err, stats) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log((path.basename(file, path.extname(file))) + ' - ' + ((path.extname(file)).slice(1)) + ' - ' + (stats.size));
        });
        
    });
  }
});