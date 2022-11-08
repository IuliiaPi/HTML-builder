const { readdir, stat } = require('fs/promises');

const fs = require('fs');
const path = require('path');

// const pathToFolder = path.join(__dirname, './styles');
const pathToBundle = path.join(__dirname, 'project-dist', './bundle.css');


const readDirectory = async () => {
  const pathToFolder = path.join(__dirname, './styles');

  try {
    const folderContent = await readdir(pathToFolder);

    folderContent.forEach(async (item) => {
      const pathToFile = path.join(pathToFolder, item); 

      const itemStats = await stat(pathToFile);

      if ((itemStats.isFile()) && ((path.extname(pathToFile)) === '.css')) {
        // console.log(pathToFile);


        //  fs. readFile(pathToFile, 'utf8', function(fileContent) {
        //                 //   if (error) throw error; // ошибка чтения файла, если есть
        //     //                 // console.log(fileContent);
    
        //     //                 let arr = fileContent;
        //                     fs.writeFile(pathToBundle, fileContent);
        //  });




        const rs = fs.createReadStream(pathToFile);

        let arr = [];
        rs.on('data', (chunk) => {
        arr += chunk.toString();
        });

       rs.on('end', () => {

    //  const ws = fs.createWriteStream(arr);
    //     ws.write(pathToBundle);
    //     console.log(ws);

        fs.writeFile(pathToBundle, arr, function(error){
          if(error) throw error; // ошибка чтения файла, если есть
        //   console.log(arr);
          });

});


       

        // fs. readFile(pathToFile, 'utf8', function(error, fileContent) {
        //               if (error) throw error; // ошибка чтения файла, если есть
        //                 // console.log(fileContent);

        //                 let arr = fileContent;
        //                 fs.writeFile(pathToBundle, arr, function(error){
        //                                 if(error) throw error; // ошибка чтения файла, если есть
        //                                 console.log('Данные успешно записаны записать файл');
        //                               });

        // const fileContent = await readFile(pathToFile);
        // console.log(fileContent);

        // fileContent.forEach(async (item1) => {

        //     const arr = [];
        //     item1 => arr.push(item1);

        //   folderContent.on('item', item => arr.push(item));
        //   console.log(arr);

        // });
        // console.log(fileContent);
      }

    });

  } catch (err) {
    if (err) console.error(err.message);
  }
};

readDirectory();


// Чтение содержимого папки styles
// fs.readdir(pathToFolder, (err, folderContent) => {  
//   if (err) {
//     console.log(err);
//   } else {

//     // Проверка является ли объект файлом и имеет ли файл нужное расширение
//     folderContent.forEach(item => {
//       const pathToFile = path.join(pathToFolder, item); 

//       if ((path.extname(pathToFile)) === '.css') {
//         // console.log(pathToFile);
     
 
//         // Чтение файла стилей

//         fs.readFile(pathToFile, 'utf8', function(error, folderContent) {
//           if (error) throw error; // ошибка чтения файла, если есть
//             // console.log(folderContent);
      

          // Запись прочитанных данных в массив


//           let arr = folderContent;

//           fs.writeFile(pathToBundle, arr, function(error){
//             if(error) throw error; // ошибка чтения файла, если есть
//             console.log('Данные успешно записаны записать файл');
//           });


//         //   const arr = [];
//         //   folderContent.on('line', line => arr.push(line));
//         //   console.log(arr);
//         });
//       }

//       // Запись массива стилей в файл bundle.css



    
//     });
//   }
// });
