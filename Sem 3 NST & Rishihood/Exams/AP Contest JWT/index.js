// JWT 

// It made of 3 parts separated by dots (.)
// Header.Payload.Signature

// First part is the header which typically consists of two parts: 
// the type of the token (JWT)
// the signing algorithm being used, such as HMAC SHA256 or RSA.


// the second part is the payload, which contains the data (what data we have stored in the token)



 const jwt = require('jsonwebtoken');
const secret = '@Nsingh$123';


function genratetoken(id,user){

    const payload = {
        id: id,
        user: user
    }
    return jwt.sign(payload, secret, {expiresIn: '1h'});
}

function verifytoken(token){
    try {
        const decoded = jwt.verify(token, secret);
        return decoded;
    } catch (err) {
        return null;
    }
}

console.log("Generated Token:", genratetoken(1,'Nsingh'));
const token = genratetoken(1,'Nsingh');
console.log("Verified Token:", verifytoken(token));