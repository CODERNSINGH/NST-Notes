// Today i thing we will learn REST API

// url: /products
// single products: /products/:id
// All Products categories: /products/categories
// single products category /products/categories/:category

const express = require('express')
const fs = require('fs')

const app = express()

// app.get('/products',((req,res)=>{
//     const all = JSON.parse(fs.readFileSync('./products.json','utf-8'))
//     res.json(all)

// }))



// choosing by id
app.get('/products/:id',((req,res)=>{
    const id = req.params.id;
    console.log(id)
    const all = JSON.parse(fs.readFileSync('./products.json','utf-8'))
    res.json(all.products.filter((x)=>x.id == id))

}))

// category
app.get('/products/categories/:category',((req,res)=>{
    const category = req.params.category;
    console.log(category)
    const all = JSON.parse(fs.readFileSync('./products.json','utf-8'))
    res.send((all.products).filter((x)=>x.category.includes(category)))

}))


app.get('/products/title/:title',((req,res)=>{
    const title = req.params.title;
    console.log(title)
    const all = JSON.parse(fs.readFileSync('./products.json','utf-8'))
    res.send((all.products).filter((x)=>x.title.includes(title)))

}))


app.use(express.json())



app.post('/login',((req,res)=>{
    
    const data = req.body
    console.log(data)
    const userDetails = fs.readFileSync('./database.json','utf-8')
    console.log(userDetails)

    if( userDetails.username == data.username && userDetails.password == data.password){

        res.send("This is your data",userDetails.data)
    }else{
        res.send("Failed to Login")
    }
    

}))







// Pegination Privous Page 2,3,4,5 Next page
// Limit and Skip
// show question/products from 21 - 30 skip 20 limit = 10

app.get('/products',((req,res)=>{
    const {limit = 10,skip=10} = req.query;
    console.log(limit,skip)
    const all = JSON.parse(fs.readFileSync('./products.json','utf-8'))
    res.send(all.products.slice(Number(skip),Number(skip)+Number(limit)))

}))








app.listen(3000,()=>{
    console.log("http://localhost:3000")
})