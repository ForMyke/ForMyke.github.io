export function initializeFormBehavior() {
  // Evento para hacer scroll lento hacia el formulario de contacto
  document
    .getElementById("contact-button")
    .addEventListener("click", function () {
      document.getElementById("contact-form").scrollIntoView({
        behavior: "smooth",
      });
    });

  // Evento del formulario para mostrar SweetAlert, validar y limpiar el formulario
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Evita el envío inmediato del formulario

      // Obtener valores de los campos
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Validar que los campos no estén vacíos
      if (!name || !email || !message) {
        Swal.fire({
          icon: "error",
          title: "Algo no anda bien",
          text: "Por favor completa todos los campos",
        });
        return; // Si falta algún campo, se detiene el proceso
      }

      // Si la validación es exitosa, muestra el SweetAlert de éxito y envía el formulario
      let form = document.getElementById("contact-form"); // Referencia al formulario
      let timerInterval;
      Swal.fire({
        title: "¡Mensaje enviado!",
        html: "Redirigiendo a tu GitHub en <b></b> milisegundos.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          form.reset(); // Limpiar el formulario después de enviar
          window.location.href = "https://github.com/ForMyke"; // Redirigir a tu GitHub
        }
      });
    });
}
