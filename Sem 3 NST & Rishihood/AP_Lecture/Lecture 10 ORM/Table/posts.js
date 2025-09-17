const post = {
    tableName: 'posts',
    columns : [
        {
            name: 'id',
            type: 'int',
            constraints: ['PRIMAEY KEY'] // indexing only difference by unique and not null
        },
        {
            name: 'user_id',
            type: 'varchar(255)',
            constraints: ['NOT NULL', 'FOREIGN KEY REFERENCES users(id)']
        },
        {
            name: 'tittle',
            type: 'varchar(255)',
            constraints: ['NOT NULL']
        },
        {
            name: 'content',
            type: 'varchar(255)',
            constraints: ['NOT NULL']
        }
    ]
}
const sql = `create table ${post.tables} if not exists(
    id int primary key,
    userID int NOT NULL REFERENCES users(id),
    tittle varchar(255) NOT NULL,
    content text
);`

module.exports = post;