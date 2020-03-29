const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const parser = require('body-parser');
const path = require('path');
const port = 8080;
const app = express();
const crypt = require('bcrypt');


const conn = mysql.createConnection({
    host:'',
    user: '',
    password:'',
    database: ''
});

conn.connect((err)=>{
if (err) throw err
});

app.use(session({
    secret:'LittleSecret',
    resave:true,
    saveUninitialized:true
}));

app.use(parser.urlencoded({
    urlencoded:true,
    extended:true
}));

app.use(parser.json());

app.use(express.static(path.join(__dirname,'/public')));

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname + '/nanduOne.html'));
});

app.post('/auth',(req,resp)=>{
    var uname = req.body.uname;
    var pword = req.body.pword;   
    var qry = "SELECT * FROM frnds WHERE name = ?";
    
    conn.query(qry,[uname],(err,res)=>{
              
      if(res.length > 0 && res.length < 2)

            { var qry = "SELECT pword FROM frnds WHERE name = ?"

            conn.query(qry,[uname],(err,res)=>{

                crypt.compare(pword,res[0].pword,(err,res)=>{
                    if (res==true){
                        req.session.loggedin=true;
                        req.session.username=uname;
                        resp.redirect('/albums');
                    }else {
                        resp.write('Please check the entered username & password again!!!');
                    }                
                    resp.end();
                });            
            });

        }else{            
            resp.end();
            resp.write('Please check the entered username & password again!!!'); }       
    });
  
});

app.get('/albums',(req,res)=>{
    if(req.session.loggedin){
    res.sendFile(path.join(__dirname + '/nanduTwo.html'))
    }
});

app.get('/about',(req,res)=>{
    if(req.session.loggedin){
    res.sendFile(path.join(__dirname + '/nanduThree.html'));
    }
});

app.get('/signout',(req,res)=>{
    req.session.loggedin = false;
    delete req.session.uname;
    res.redirect('/');    
});

app.listen(port,()=>{
    console.log('Listening');
});

