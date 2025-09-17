const users = require('./users');
const tables = [users];


// const sql = `create table ${user.tables} if not exists(
//     id int ,
//     name varchar(255),
//     email varchar(255),
//     age int
//     foreign key (userId) references users(id)
// )`


module.exports = tables