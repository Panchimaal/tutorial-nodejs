const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt')
// joins a sequence of path segments using that platform specific separator
//And second thing it does, it returns a normalized resulting path.
console.log(filePath);

const base = path.basename(filePath) //method name basename returns the last portion of the path
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);