const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const routes = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use("/api", routes);

app.listen(3000, async () => {
    await sequelize.sync();
    console.log("Servidor corriendo en http://localhost:3000");
});
