// Obtener el formulario y agregar un evento de envío
const formulario = document.getElementById('miFormulario');
formulario.addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar que se envíe el formulario de forma predeterminada

  // Aquí puedes agregar tu lógica de validación del formulario
  // Si el formulario es válido, puedes mostrar el modal o el mensaje

  // Mostrar el modal
  const modal = document.getElementById('modal');
  modal.style.display = 'block';

  // Reiniciar el formulario
  formulario.reset();
});

// Ocultar el modal cuando se hace clic fuera de él
const modal = document.getElementById('modal');
modal.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
