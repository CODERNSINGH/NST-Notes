// const {PrismaClient} = require('@prisma/client')
// const express = require('express')

// // ORM is just a quaery rapper

// const app = express()

// app.use(express.json())

// const prisma = new PrismaClient();

// app.post("/auth",async (req,res)=>{

//     const user = await prisma.User.create({data : req.body})
//     console.log(user,'Created')
//     res.status()
// })

// app.listen(3000,()=>{
//     console.log('http://localhost:3000');
    
// })


const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.post("/auth", async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: req.body
    });
    console.log(user, "Created");
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});


app.post("/login", async (req, res) => {


  try {

    const {user,email} = req.body
    const data = await prisma.user.findUnique({
      where: {email : email}
    });
    console.log(data, "User Exist");
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: `User Doe't Exist ${err}` });
  }
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
