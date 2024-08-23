const express = require("express");
const router = express.Router();
const { User, Date } = require("../models");

router.post("/inscripcion", async (req, res) => {
    const { nombre, apellidos, correo, fecha } = req.body;

    const date = await Date.findOne({ where: { fecha } });
    if (!date || date.cupos <= 0) {
        return res.status(400).send("No hay disponibilidad para esta fecha.");
    }

    await User.create({ nombre, apellidos, correo, DateId: date.id });
    await date.update({ cupos: date.cupos - 1 });

    res.send("Inscripción realizada con éxito.");
});

router.get("/fechas", async (req, res) => {
    const fechas = await Date.findAll();
    res.json(fechas);
});

module.exports = router;
