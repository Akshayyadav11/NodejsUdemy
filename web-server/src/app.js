const express = require('express')
const path = require('path')
const hbs = require('hbs')


// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));

const app = express()


// define path for express config
const publicDirPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// handlebars
// set up handle bar
app.set('view engine', 'hbs')

// view location
// hbs looks for views folder(now delted) but if we want to customize it then giev any name to folder and set following
app.set('views', viewPath)

// register partials
hbs.registerPartials(partialsPath)

// to load static dir to serve
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

// from view engine it will render index.hbs
app.get('', (req, res) => {

    res.render('index', {
        title: 'Weather app',
        name: 'akshay yadav'
    })

    // without hbs
    // res.send({
    //     title: 'Weather app',
    //     name: 'akshay yadav'
    // })
})

app.get('/about', (req, res) => {

    res.render('about', {
        title: 'About',
        name: 'akshay yadav'
    })
})


app.get('/help', (req, res) => {

    res.render('help', {
        title: 'Help',
        name: 'akshay yadav'
    })
})


app.get('/weather', (req, res) => {
    // res.send('<html><title>Weather</title><body>This is weather page</body></html>')
    res.send({
        forecast: 'It is snowing',
        location: 'Mumbai'
    })
})


app.get('/help/*', (req, res) => {
    // res.send('Help article not found')
    res.render('404', {
        errorMessage: 'Help article not found',
        title: '404',
        name: 'akshay yadav'
    })
})


app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: '404 page not found',
        title: '404',
        name: 'akshay yadav'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})