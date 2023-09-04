document.getElementById("Enviar").addEventListener("click", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nameInput").value;
  const apellido = document.getElementById("lastNameInput").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const serverResponse = document.getElementById("serverResponse");

  const URL = "https://jsonplaceholder.typicode.com/users";

  const datos = {
    nombre,
    apellido,
    fechaNacimiento,
  };

  fetch(URL, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-Type": "application/json", // "appication" tenía un error tipográfico
    },
  })
    .then((res) => {
      if (res.ok) {
        console.log("Datos enviados correctamente");
        return res.json(); // Leer la respuesta JSON del servidor
      } else {
        throw new Error("Error al enviar");
      }
    })
    .then((data) => {
      serverResponse.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      serverResponse.textContent = "Error en la Solicitud: " + error.message;
    });
});
