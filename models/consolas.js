const Sequelize = require("sequelize")
const Consola = (sequelize)=>{
    sequelize.define('consola',{
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre:Sequelize.STRING,
        // lanzamiento:{
        //     type:Sequelize.INTEGER,
        //     allowNull:true
        // }
    })
}

module.exports = Consola