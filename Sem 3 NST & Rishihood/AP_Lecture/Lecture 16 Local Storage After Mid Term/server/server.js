const express = require('express');
const app = express();
app.use(express.json());

app.post('/signup', async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({ error: "Email and password are required" });
    }

    try{
        users.insert({ email, password });
        res.json({ message: "User created successfully" });
    }catch(err){
        if(err.code === 'USER_EXISTS'){
            return res.status(400).json({ error: "User already exists" });
        }
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get('/login', async (req, res) => {
    const {email, password} = req.query;
    if(!email || !password){
        return res.status(400).json({ error: "Email and password are required" });
    }

    try{
        const user = users.find({ email });
        if(!user || user.password !== password){
            return res.status(401).json({ error: "Invalid credentials" });
        }
        res.json({ message: "Login successful" });
    }catch(err){
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});