const mysql = require('mysql2/promise');

const user = {
    tableName: 'users',
    id: "Number",
    name: "String",
    email: "String",
    age: "number"
}

function generateCreateTableSQL(user) {
    let columns = [];
    for (let key in user) {
        if (key !== 'tableName') {
            let type = obj[key];
            switch (type) {
                case "Number":
                    columns.push(`${key} INT`);
                    break;
                case "String":
                    columns.push(`${key} VARCHAR(255)`);
                    break;
                default:
                    throw new Error(`Unsupported type: ${type}`);
            }
        }
    }
    return `CREATE TABLE IF NOT EXISTS ${user.tableName} (${columns.join(', ')})`;
}

const sql = `create table ${user.tableName} if not exists(
    id int ,
    name varchar(255),
    email varchar(255),
    age int
)`

async function connect(sql) {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin@420969',

    })
}