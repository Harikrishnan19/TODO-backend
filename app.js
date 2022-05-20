const express = require('express')
const db = require('./models')

// constants
const PORT = 8080

// created server
const app = express()

// body parser => to get request body
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// testing database connection
function testDatabaseConnection(){
    return db.sequelize.authenticate()
    // .then(res => console.log('Connection has been established successfully.'))
    // .catch(err => console.log('Unable to connect to the database:', err))
}

// Immediately invoked function expression 
// (() => {})();

// syncing all models/tables in the database
function syncModels(){
    return db.sequelize.sync()
    // .then(_ => console.log("Database models synced successfully."))
    // .catch(err => console.log('Unable to sync models in database', err))
}

function startApp() {

    testDatabaseConnection()
    .then(res => console.log('Connection has been established successfully.'))
    .then(syncModels)
    .then(res => console.log("Database models synced successfully."))
    .catch(err => console.log('err_database:', err))

    app.listen(PORT, () => {
        console.log('Server starts at 8000')
    })
}

startApp()