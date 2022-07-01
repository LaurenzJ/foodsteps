const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        'name': 'jimmy neutron'
    })
})

app.listen(3000)