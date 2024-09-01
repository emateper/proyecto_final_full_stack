import { Sequelize } from "sequelize";

const bd = new Sequelize('novedades_bd', 'root', '82467913', {
    host:'localhost',
    dialect: 'mysql',
})

export default bd