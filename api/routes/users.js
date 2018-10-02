const express = require('express')

// Spin up express
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({
        data: {
            firstName: 'Scott',
            lastName: 'Sanford',
            email: 'ssanford@mediafly.com',
            password: 'pwd'
        }
    })
})

module.exports = router
