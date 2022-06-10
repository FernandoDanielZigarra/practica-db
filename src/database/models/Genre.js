const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    const alias = "Genre";

    const cols ={
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true

        },
        name : {
            type : dataTypes.STRING(100),
            allowNull : false,
            
        },
        ranking : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            unique : true,
            defaultValue : 1
        },
        active : {
            type : dataTypes.BOOLEAN,
            allowNull : false,
            
        },
        genre_id : {
            type : dataTypes.INTEGER,
            allowNull : true
        }
    }

    const config = {
        tableName : "genres",
        underscored : true
    }

    const Genre = sequelize.define(alias, cols, config);
    
    return Genre;
}
