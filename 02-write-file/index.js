const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, './text.txt');

const toWrite = fs.createWriteStream(pathToFile);

process.stdout.write('What do you think of RS School? \n');

process.on('SIGINT', () => {
  process.stdout.write('Thank you for your feedback');
  process.exit();
});

process.stdin.on('data', fileContent => {
  if (fileContent.toString().trim() === 'exit') {
    process.stdout.write('Thank you for your feedback');
    process.exit();
  } else {
    toWrite.write(fileContent.toString());
  }
});
