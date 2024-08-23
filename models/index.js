const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
    "evento_posipedia",
    "maguzman",
    "2KAt8m0DfvHT52CGyN8yEJpR36HpR1WT",
    {
        host: "postgresql://maguzman:2KAt8m0DfvHT52CGyN8yEJpR36HpR1WT@dpg-cr495h08fa8c73dj8ue0-a.oregon-postgres.render.com/evento_posipedia",
        dialect: "postgres",
    }
);

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
