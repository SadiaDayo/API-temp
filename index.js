const http= require('http');
const express = require('express');
const users = require('./MOCK_DATA.json');
const Port = 8000
const app= express();

app.get('/api/users',(req, res)=>{
    return res.json(users);
});
//read
app.get('/api/users/:id',(req, res)=>{
    const id= Number(req.params.id);
    const user= users.find((user)=> user.id === id);
    return res.json(user);
});
//add
app.post('/api/users', (re, res)=>{
    console.log("new user")
})
//update
app.patch('/api/users/:id', (re, res)=>{
    return res.json({status:"ok"});
})

const myserver= http.createServer(app);

 myserver.listen(Port, ()=>{
    console.log("server is running")
 });
