document.addEventListener("DOMContentLoaded", async () => {
    const fechaSelect = document.getElementById("fecha");

    async function cargarFechas() {
        const response = await fetch("/api/fechas");
        const fechas = await response.json();

        fechas.forEach((fecha) => {
            const option = document.createElement("option");
            option.value = fecha.fecha;
            option.textContent = `${fecha.fecha} - ${fecha.cupos} cupos disponibles`;
            fechaSelect.appendChild(option);
        });
    }

    cargarFechas();

    document
        .getElementById("formulario")
        .addEventListener("submit", async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = {
                nombre: formData.get("nombre"),
                apellidos: formData.get("apellidos"),
                correo: formData.get("correo"),
                fecha: formData.get("fecha"),
            };

            const response = await fetch("/api/inscripcion", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const mensaje = document.getElementById("mensaje");
            if (response.ok) {
                mensaje.textContent = "Inscripción realizada con éxito.";
            } else {
                mensaje.textContent = "No hay disponibilidad para esta fecha.";
            }
        });
});
