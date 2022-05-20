const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    
    const ToDo = sequelize.define('todo', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        // foreign key
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                // This is a reference to another model
                model: 'users',
                // This is the column name of the referenced model
                key: 'id'
            }
        }
    }, {})

    return ToDo
}