const fs = require('fs')


// 18.
const book = {
    title: 'JAVA',
    desc: 'Java fundamentals'
}
const bookJSON = JSON.stringify(book)
    // console.log(bookJSON);

// const bookObj = JSON.parse(bookJSON)
// console.log(bookObj);

// fs.writeFileSync('1-json.json', bookJSON)

// const bufferData = fs.readFileSync('1-json.json')
// const fileData = JSON.parse(bufferData.toString())
// console.log(fileData);


// 18. Exercise
const bufferData = fs.readFileSync('1-json.json')
var personJSON = JSON.parse(bufferData.toString())

personJSON.name = 'Akshay'
personJSON.address = 'Nerul'
personJSON.age = '30'

const personObj = JSON.stringify(personJSON)
fs.writeFileSync('1-json.json', personObj)