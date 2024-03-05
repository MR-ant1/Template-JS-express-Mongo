//importamos dependencias de librerias y luego ficheros
import express from "express"
import 'dotenv/config'
import { dbConnection } from "./database/db.js";

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 4001;

dbConnection()
.then(() => {
    console.log("Database Connected")
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})
.catch(error => {
    console.log(error)
})

