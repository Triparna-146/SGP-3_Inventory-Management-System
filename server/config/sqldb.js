require('dotenv').config();

const mysql = require('mysql');

let db;

try {
  db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  console.log('Database pool created successfully');
} catch (error) {
  console.error('Error creating the database pool:', error);
  process.exit(1); // Exit the process if the database pool fails to create
}

module.exports = db;
