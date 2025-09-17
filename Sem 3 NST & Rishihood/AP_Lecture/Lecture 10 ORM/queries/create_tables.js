const tables = require('../Table')
const { columns } = require('../Table/users')
console.log(tables)

function getSqlForCreatingTable(){
    return `create table ${table.tableName} if not exists(
        ${tables.columns.map((columns) =>{
            return `${columns.name} ${columns.type} ${columns.constraints.join(' ')}`
        })}`
}

function genrateTables(){
    for (let table of tables){
        let sql = getSqlForCreatingTable(table)
        console.log(sql)
    }
}

function getSqlForCreatingTable(){
    return `create table ${tables.tableName} if not exists(
        ${tables.columns.map((columns) =>{
            return `${columns.name} ${columns.type} ${columns.constraints.join(' ')}`
        })}`
}

console.log(genrateTables())