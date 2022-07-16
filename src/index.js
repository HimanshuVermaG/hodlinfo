const fs = require('fs')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')

const port  = 8080
const publicDirectoryPath = path.join(__dirname, '../public')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(publicDirectoryPath))
app.use(cookieParser())

app.listen(port, () => {
    console.log(`Server started & listening on port: ${port}`)
})
