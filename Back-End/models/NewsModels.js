import bd from '../BD/bd.js';
import { DataTypes } from 'sequelize';

const NewsModel = bd.define('novedades', { 
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    titulo: { 
        type: DataTypes.STRING(50), 
        allowNull: true 
    },
    subtitulo: { 
        type: DataTypes.TEXT('tiny') 
    },
    cuerpo: { 
        type: DataTypes.TEXT 
    } 
}, {
    tableName: 'novedades', 
    timestamps: false 
});

export default NewsModel;


