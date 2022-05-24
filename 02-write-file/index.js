const fs = require('fs');
const path = require('path');

const { stdout } = process;

// create path
let filePath = path.join(__dirname, './text.txt');

// create text.txt
fs.open(filePath, 'w', (err) => {
  if(err) throw err;

  // create question in console
  const readline = require('readline');

  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('What do you think of RS School? \n', function(answer) {

    if (answer !== 'exit') {
        
      // read text.txt
      fs.readFile(filePath, 'utf8', function(error, fileContent){
        if(error) throw error;
        
        let toWrite = fileContent + answer + '\n'; 

        fs.appendFile(filePath, toWrite, function(error){
          if(error) throw error; 
          
        });
      });
      
    } else {
      process.exit();
    }
    process.on('exit', () => stdout.write('Thank you for your feedback'));
          
  });
          
});


