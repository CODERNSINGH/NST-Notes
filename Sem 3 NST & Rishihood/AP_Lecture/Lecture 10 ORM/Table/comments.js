const comments = {
    tableName: 'comments',
    columns : [
        {
            name: 'id',
            type: 'int',
            constraints: ['PRIMAEY KEY'] // indexing only difference by unique and not null
        },
        {
            name: 'name',
            type: 'varchar(255)',
            constraints: ['NOT NULL']
        },
        {
            name: 'email',
            type: 'varchar(255)',
            constraints: ['NOT NULL','UNIQUE']
        }
    ]
}

module.exports = comments;