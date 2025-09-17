const mysql = require('mysql2/promise')

// async function connect() {
//     try{

//         //const connection = await mysql.createConnection({  // it will break connection but if we multiple connection
//         const connection = mysql.createPool({ // create n numher of connection and exicute any one them
//             host: 'localhost',
//             user: 'root',
//             password: 'admin@420969',
//             database: 'NewtonMart'
//         })
//         console.log("Connected to DataBase");


//         try{
//             await connection.query(
//                 // `create table users(id int primary key,name varchar(100) not null);`
//                 `show databases;`
            
//             );
//             // connection.end() only use where we use mysql.createConnection
//             console.log("Database is Created 🤗");
            
//         }catch(err){
//             console.log("Got another Error", err);
            
//         }
        
//     }catch(err){
//         console.log("Error", err)
//     }
// }
// connect()


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password : 'admin@420969',
    database: 'NewtonMart',
    connectionLimit: 10
})

module.exports = pool;  