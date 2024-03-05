//importamos dependencias de librerias y luego ficheros
import express from "express"
import 'dotenv/config'

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})