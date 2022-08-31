const express = require('express')
const cors = require('cors')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
});

app.use(cors())

app.use(express.json())

app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM react_mysql";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.post("/api/insert", (req, res) => {

    const userName = req.body.userName
    const userDistrict = req.body.userDistrict

    const sqlInsert = "INSERT INTO react_mysql (name, district) VALUES(?,?);"
    db.query(sqlInsert, [userName, userDistrict], (err, result) => {
        console.log(err);
    })
});


// app.get('/', (req, res) => {

//     const sqlInsert = "INSERT INTO react_mysql (name, district) VALUES('danny','chennai');"
//     db.query(sqlInsert, (err, result) => {
//         res.send("Data updated");
//     })
    
// })

app.listen(3001, () => {
    console.log('running on port 3001');
});