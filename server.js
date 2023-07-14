const express = require('express')

const app = express()

app.post('/print/job/data-list', (req, res) => {
    res.send('Done!')
})

app.get('/', (req, res) => {
    res.send('Chal raha hai!')
})

app.listen(8080, () => {
    console.log('http://localhost:8080');
})