const express = require('express')
const path = require('path')


// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));

const app = express()

const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))


// removing abt, hlp as reading from public folder
// app.get('/about', (req, res) => {
//     res.send('<html><title>About</title><body>This is about page</body></html>')
// })


// app.get('/help', (req, res) => {
//     res.send([{
//             name: 'akshay',
//             age: 30
//         },
//         {
//             name: 'yadav',
//             age: 30
//         }
//     ])
// })


app.get('/weather', (req, res) => {
    // res.send('<html><title>Weather</title><body>This is weather page</body></html>')
    res.send({
        forecast: 'It is snowing',
        location: 'Mumbai'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000');
})