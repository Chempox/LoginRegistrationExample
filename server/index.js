//Cost declarations
const express = require("express");
const mysql = require("mysql");
const cors = require('cors');
const { response } = require("express");
const app = express();
const bcrypt = require("bcrypt");
const saltRounds = 10;

//Cors & Express init
app.use(cors());
app.use(express.json());

//Server Connection *Modify this to match your mysql database*
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "access",
});

app.post('/signup', (require,response) =>{
    const name = require.body.name;
    const lastName = require.body.lastName;
    const username = require.body.username;
    const email = require.body.email;
    const password = require.body.password;
    
    bcrypt.hash(password,saltRounds, (err,hash) =>{
        if (err){
            console.log(err);
        }
        db.query('INSERT INTO user (username, password, name, lastName, email) VALUES (?,?,?,?,?)',
        [username,hash,name,lastName,email],
        (err,result) =>{
            if(err){
                console.log(err)
            }else{
                response.send("Values Inserted")
            }
        }
        );
    })
    
});

app.post('/login',(require,response) =>{
    const username = require.body.username;
    const password = require.body.password;
    db.query("SELECT * FROM user WHERE username = ?;",
    username,
    (err, result) =>{
        if (err) {
            response.send({err: err});
        }
        if(result.length > 0) {
            bcrypt.compare(password, result[0].password, (error, res) => {
                if(res){
                    response.send(result)
                }else{
                    response.send({message: "Wrong password or username"});
                }
            })
        } else{
            response.send({message: "User doesn't exist"});
        }
    })
})


app.listen(3001, ()=> {
    console.log('Server is running...')
})