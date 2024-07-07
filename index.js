const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors');

dotenv.config({ path: './dev.env' })

const app = express()

app.use(express.json())
app.use(cors());
const port = process.env.PORT || 3000

//root api

app.get('/', (req, res) => {
    res.send(`Express is running at port ${port} NODE_ENV=${process.env.NODE_ENV}`)
})

const api_routes = require('./src/routes/api_routes.js')

app.use('/api/', api_routes)

app.listen(port, () => {
    console.log(`Express is running at port ${port} NODE_ENV=${process.env.NODE_ENV}`)
})