const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: "postgres",
});

const User = sequelize.define("User", {
    nombre: { type: DataTypes.STRING, allowNull: false },
    apellidos: { type: DataTypes.STRING, allowNull: false },
    correo: { type: DataTypes.STRING, allowNull: false },
});

const Date = sequelize.define("Date", {
    fecha: { type: DataTypes.DATEONLY, allowNull: false },
    cupos: { type: DataTypes.INTEGER, defaultValue: 20 },
});

User.belongsTo(Date);
Date.hasMany(User);

module.exports = { sequelize, User, Date };
