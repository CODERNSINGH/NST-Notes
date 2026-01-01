const express = require('express')
const bcrypt = require("bcrypt")
const { PrismaClient} = require('@prisma/client')

const prisma = PrismaClient()

const app = express()

app.get(async (req,res) =>{
    // const token = req.headers.authorizaation[""]split("")
    const token = req.headers.authorization.split(" ")[1];
    // const authorization?.split(" ")[1];

    const compare = await bcrypt.compare('plainpass','Hash')


    const data = await prisma.user.find({
        where:{id:90}
    })
    const data1 = await prisma.user.create({
        Date:{id:90}
    })
    const data2 = await prisma.user.find({
        where:{id:90}
    })
    const data4 = await prisma.user.find({
        where:{id:90}
    })

})


const jwt = require('jsonwebtoken')
const paylod = {
    userId : 90,
    paymentMethod : 'Online'
}
const token = jwt.sign(paylod,'Screate',{expiresIn:'5h'})


const veri = await jwt.verify(token,screate)


// function add(a:numer)