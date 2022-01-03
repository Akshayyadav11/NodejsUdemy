const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.send('Hello express')
})


app.get('/help', (req, res) => {
    res.send(' Hello help page')
})


app.get('/about', (req, res) => {
    res.send('<html><title>About</title><body>This is about page</body></html>')
})


app.get('/weather', (req, res) => {
    res.send('<html><title>Weather</title><body>This is weather page</body></html>')
})


app.get('/help', (req, res) => {
    res.send(' Hello help page')
})


app.listen(3000, () => {
    console.log('Server is up on port 3000');
})