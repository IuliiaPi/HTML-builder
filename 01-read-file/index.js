const fs = require('fs');
const path = require('path');
const { stdout } = require('process');
let filePath = path.join(__dirname, './text.txt');

const stream = fs.createReadStream(filePath, 'utf8');
stream.on('data', data => stdout.write(data));
