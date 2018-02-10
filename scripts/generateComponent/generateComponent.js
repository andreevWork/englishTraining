const fs = require('fs');
const util = require('util');
const path = require('path');
const args = process.argv.slice(2);
/**
 * Options object
 */
const options = {
  srcDir: 'src' + path.sep + 'components',
  filesListForCreate: getFilesForCreate(args)
};

const targetDir = options.srcDir + path.sep + args[0];

createRecursiveDir(targetDir);

createFiles(targetDir, options.filesListForCreate);
/**
 * Helpers
 */

function createRecursiveDir(targetDir) {
  targetDir.split(path.sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(parentDir, childDir);

    if (fs.existsSync(curDir)) {
      return curDir;
    }

    try {
      fs.mkdirSync(curDir);
    } catch (err) {
      if (err.code !== 'EEXIST') {
        throw err;
      }
    }

    return curDir;
  }, '');

  console.log('\x1b[36m%s\x1b[0m', `Directory "${targetDir}" created`);
}

function createFiles(targetDir, filesList) {
  for (let {fileName, content} of filesList) {
    const filepath = path.join(targetDir, fileName);

    fs.writeFile(filepath, content, 'utf8', (err) => {
      if (err) throw err;

      console.log('\x1b[36m%s\x1b[0m', `File "${fileName}" created`);
    });
  }
}

function getFilesForCreate(args) {
  const componentName = args[0].split(path.sep).pop();

  const filesForCreate = [
    {
      fileName: '%s.jsx',
      content: getFileContent('Template.jsx', componentName)
    },
    {
      fileName: '%s.sass',
      content: ``
    }
  ];

  return filesForCreate
    .map(({fileName, content}) => ({
      fileName: util.format(fileName, componentName),
      content
    }));
}

function getFileContent(fileName, componentName) {
  return fs
    .readFileSync(path.resolve(__dirname, 'templates', fileName), 'utf-8')
    .replace(/Template/g, componentName);
}
