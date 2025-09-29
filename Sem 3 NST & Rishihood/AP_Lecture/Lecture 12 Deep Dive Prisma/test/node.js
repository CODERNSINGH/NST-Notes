const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "codesingh-db.cfg8cum8s9o5.eu-north-1.rds.amazonaws.com",
  user: "admin",
  password: "Nsingh#admin420",
  database: "codesingh_db",
  port: 3306,
  ssl: { rejectUnauthorized: true } // sometimes needed
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting:", err);
    return;
  }
  console.log("Connected to Aurora RDS!");
});

