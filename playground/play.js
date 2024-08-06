const fs = require('fs')
const book = {
    title: 'Ego ',
    author: 'your self'
}

const bookJSON = JSON.stringify(book);
fs.writeFileSync('1-json.json', bookJSON);
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(dataBuffer.toString())
console.log(data.author);

data.author = 'me'
data.title = 'hello'

fs.writeFileSync('1-json.json', JSON.stringify(data))