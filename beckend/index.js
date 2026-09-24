require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const { Pool } = require('pg')

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json())

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT, 10),
})

const PORT = 3000





app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`)
})