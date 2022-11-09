const { readdir, stat } = require('fs/promises');

const fs = require('fs');
const path = require('path');

const pathToBundle = path.join(__dirname, 'project-dist', './bundle.css');

const ws = fs.createWriteStream(pathToBundle);

const readDirectory = async () => {
  const pathToFolder = path.join(__dirname, './styles');

  try {
    const folderContent = await readdir(pathToFolder);

    folderContent.forEach(async (item) => {
      const pathToFile = path.join(pathToFolder, item); 

      const itemStats = await stat(pathToFile);

      if ((itemStats.isFile()) && ((path.extname(pathToFile)) === '.css')) {
        const rs = fs.createReadStream(pathToFile, 'utf-8');
        rs.pipe(ws);
      }

    });
  } catch (err) {
    if (err) console.error(err.message);
  }
};

readDirectory();
