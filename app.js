const bodyParser = require('body-parser')
const express = require('express')
// const mongoose = require('mongoose')
const morgan = require('morgan')

// Spin up express
const app = express()

// import API routes
const userRoutes = require('./api/routes/users')

// Connect to MongoDB
// mongoose.connect(`mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@ds123534.mlab.com:23534/node-rest-shop`, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log('Connected to database successfully')
// }).catch(() => {
//     console.log('Could not connect to database.')
// })

// MIDDLEWARE
// Log HTTP requests to Terminal
app.use(morgan('dev'))
// Body Parser middleware
app.use(bodyParser.urlencoded({extended: false}))
// Extract JSON data and make it readable
app.use(bodyParser.json())

// Handle CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    if (req.method === 'OPTIONS') {
        res.header('Access-Contol-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    next()
})

// Routes that should handle requests
// app.use('/products', productRoutes)
// app.use('/orders', orderRoutes)
app.use('/users', userRoutes)

// Handle Errors
app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

// Pass error from middleware above
app.use((error, req, res) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    })
})

// export app
module.exports = app