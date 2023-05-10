const express = require('express')
const app = express()
const port = 3000

const config = {
    host:'mysql',
    user:'root',
    password:'root',
    database:'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const createTableIfNotExists = `CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id));`;
const insertPeople1 = `INSERT INTO people(name) VALUES ('Caio Baeta')`
let people = ""

connection.query(createTableIfNotExists)
connection.query(insertPeople1)
connection.query("SELECT * FROM people", function (err, result, fields) {
    if (err) throw err;
    result.forEach(el => {
        people += "<p>" + el.name + "</p><br>"
    })
});
connection.end

app.get('/', (req,res) => {
    console.log(people);
    res.send('<h1>Full Cycle Rocks!</h1><br>' + people)
})

app.listen(port, () => {
    console.log('Running on port ' + port)
})