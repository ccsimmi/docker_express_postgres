require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const app = express();

const pool = new Pool({
    user: 'postgres',
    database: 'postgres',
    host: 'postgres',
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
})

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {

    // I know it needs error handling...
    const users = (await pool.query('SELECT * FROM Users')).rows;
    res.render('index', {
        users
    });
})

app.listen(3000, () => console.log('Server running on port 3000...'))