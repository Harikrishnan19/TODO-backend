const express = require('express')

// created server
const app = express()

const PORT = 8000

app.listen(PORT, () => {
    console.log('Server starts at 8000')
})