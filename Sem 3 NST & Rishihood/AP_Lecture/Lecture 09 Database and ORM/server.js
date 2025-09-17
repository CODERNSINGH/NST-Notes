const express = require('express');
const app = express();
const db = require('./db')  // it will return pool.promise()
const port = 3000;

app.get('/users', async (req, res) => {

    try {

        const [data] = await db.query('SELECT * FROM Customers;')
        res.json(data)
    }catch(err){
        console.log("Error ", err)
    }
})
app.patch('/users/rename/:id', async (req, res) => {

    const id = req.params

    try {
        const [data] = await db.query(`update Customers set name = ${updateName} where id = ${id};
            SELECT * FROM Customers;`)
        res.json(data)
    }catch(err){
        console.log("Error ", err)
    }
})

app.get('/users', async (req, res) => {

    try {

        const [data] = await db.query('SELECT * FROM Customers;')
        res.json(data)
    }catch(err){
        console.log("Error ", err)
    }
})







app.listen(port,()=>{
    console.log("server is live at http://localhost:3000")
})