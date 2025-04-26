const Sequelize = require('sequelize');
require('dotenv').config();

let connector = new Sequelize(
        "student_management",
        process.env.db_username,
        process.env.password, 
        {
            host: process.env.host,
            dialect: 'mysql',
            port: process.env.db_port
        }
    );


connector.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = connector;