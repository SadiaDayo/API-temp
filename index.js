const http= require('http');
const express = require('express');
const users = require('./MOCK_DATA.json');
const Port = 8000
const fs = require('fs');

const app= express();

app.use(express.urlencoded({extended: false}))

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
app.post('/api/users', (req, res)=>{
const body= req.body;
users.push({...body, id: users.length+1});
fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users),(err, data)=>{
    return res.json({status:"ok"});
} )

})

//update
app.patch('/api/users/:id', (req, res)=>{
    return res.json({status:"ok"});
})

const myserver= http.createServer(app);

 myserver.listen(Port, ()=>{
    console.log("server is running")
 });
