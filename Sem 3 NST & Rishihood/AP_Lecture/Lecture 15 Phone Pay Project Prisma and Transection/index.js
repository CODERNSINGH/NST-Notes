const express = require('express');
const { PrismaClient } = require('@prisma/client');


const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.post("/register", async (req, res) => {

    try {
        const userData = req.body
        const result = await prisma.PhonepeAccount.create({
            data:
                userData
        })

        res.status(201).json({ "User": result })
    } catch (err) {
        res.status(500).send(err.message)
    }


})

app.post("/pay", async (req, res) => {
    const tranData = req.body

    const result = await prisma.transection.create({
        data: tranData
    })

    return res.status(201).json({ "Message": result })

})

app.listen(3000, () => {
    console.log("http://localhost:3000");

})

