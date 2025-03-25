const fs = require('fs').promises; // fs = file system, node own
const path = require('path');

// fs.readdir(path.resolve(__dirname)) // resolve path 
// .then(files => console.log(files))
// .catch(e => console.log(e));


// Define uma função assíncrona chamada "readdir" que irá ler o diretório especificado
async function readdir(rootDir) {
  // Se nenhum diretório for passado como argumento, usa o diretório atual como padrão
  rootDir = rootDir || path.resolve(__dirname);
  // Lê os arquivos contidos no diretório especificado e retorna uma lista de arquivos
  // Como esta é uma operação assíncrona, utilizamos "await" para esperar a conclusão
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for(let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    if(/\.git/g.test(fileFullPath)) continue; // expressão regular para remover arquivos (/\.file/g.test) ou pastas .algumaCoisa
    if(/node_modules/g.test(fileFullPath)) continue; // expressão regular para folders (/folders/g.test)
    if(stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }
    if(
      !/\.css$/g.test(fileFullPath) && // expressão regular para identificar somente arquivos .css
    !/\.html$/g.test(fileFullPath)) continue; // expressão regular para identificar somente arquivos .html
    // console.log(fileFullPath, stats.isDirectory());
    console.log(fileFullPath);
  }
}

readdir('C:/Projetos/Course-JS-TS/Sections/Section10_Node_NPM_Express_MongoDB/');