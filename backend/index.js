const async = require('async');
const dbConnector = require("./db/dbConnector");
const authConnection = require('./db/db').authConnection;
const modelsList = require("./db/modelList");

require('dotenv').config()

async.series([
    (callback) => {
        authConnection(dbConnector, (err) => {
            if (!err)
                process.nextTick(callback, null)
            else {
                process.nextTick(callback, new Error(err))
            }
        })
    }, (callback) => {
        let tables = Object.keys(modelsList)
        async.eachSeries(tables, (table, callback) => {
            let temp = modelsList[table]
            dbConnector.sync()
            process.nextTick(callback, null)
        }, (err) => {
            process.nextTick(callback, err);
        })
    }, (callback) => {
        require('./app');
        process.nextTick(callback, null);
    }
], (err) => {
    if (err)
        console.log("ERROR", err);
})