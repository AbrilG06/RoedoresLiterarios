                                                                                                                // FILTRADO POR NOMBRE
document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
      if (e.key === "Escape") e.target.value = "";

      const searchTerm = e.target.value.toLowerCase();
      const libroImgs = document.querySelectorAll(".libro-buscar img");

      libroImgs.forEach(libroImg => {
        const imgSrc = libroImg.getAttribute("src").toLowerCase();
        const libroDiv = libroImg.parentElement;

        if (imgSrc.includes(searchTerm)) {
          libroDiv.classList.remove("filtro");
        } else {
          libroDiv.classList.add("filtro");
        }
      });
    }
  });

                                                                                                                // MODAL DE LIBROS
    // Obtener referencia al modal
    const modal1 = document.getElementById('modal1');
    const modal2 = document.getElementById('modal2');
    const modal3 = document.getElementById('modal3');
    const modal4 = document.getElementById('modal4');

    // Obtener referencia a las imágenes de los libros
    const libroImg1 = document.querySelector('.libro-buscar:nth-child(1) .libro-imagen');
    const libroImg2 = document.querySelector('.libro-buscar:nth-child(2) .libro-imagen');
    const libroImg3 = document.querySelector('.libro-buscar:nth-child(3) .libro-imagen');
    const libroImg4 = document.querySelector('.libro-buscar:nth-child(4) .libro-imagen');

    // Agregar evento de clic a las imágenes
    libroImg1.addEventListener('click', () => {
        // Mostrar el modal al hacer clic en la imagen
        modal1.classList.add('active');
    });

    libroImg2.addEventListener('click', () => {
        // Mostrar el modal al hacer clic en la imagen
        modal2.classList.add('active');
    });

    libroImg3.addEventListener('click', () => {
        // Mostrar el modal al hacer clic en la imagen
        modal3.classList.add('active');
    });
    libroImg4.addEventListener('click', () => {
      // Mostrar el modal al hacer clic en la imagen
      modal4.classList.add('active');
  });


    // Agregar evento de clic fuera del modal para cerrarlo
    window.addEventListener('click', (event) => {
        if (event.target === modal1) {
            modal1.classList.remove('active');
        }

        if (event.target === modal2) {
            modal2.classList.remove('active');
        }

        if (event.target === modal3) {
            modal3.classList.remove('active');
        }
        if (event.target === modal4) {
          modal4.classList.remove('active');
      }
    });
                                                                                                           // FILTRADO POR CATEGORIAS
// Obtén referencia a los botones de categoría y al campo de búsqueda
const categoriasBtns = document.querySelectorAll('.categoria');
const buscadorInput = document.getElementById('buscador');

// Agrega evento de clic a cada botón de categoría
categoriasBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const categoria = btn.dataset.categoria; // Obtiene la categoría del botón
    filtrarLibros(categoria);
  });
});

// Agrega evento de cambio al campo de búsqueda
buscadorInput.addEventListener('input', () => {
  const titulo = buscadorInput.value.toLowerCase(); // Obtiene el valor del campo de búsqueda en minúsculas
  filtrarLibros(titulo);
});

// Función para filtrar los libros por categoría y título
function filtrarLibros(filtro) {
  const libros = document.querySelectorAll('.libro-buscar');

  // Itera sobre cada libro y verifica si coincide con la categoría o el título
  libros.forEach((libro) => {
    const src = libro.querySelector('.libro-imagen').getAttribute('src');
    const alt = libro.querySelector('.libro-imagen').getAttribute('alt');

    const coincideCategoria = filtro === 'todos' || alt.toLowerCase().includes(filtro);
    const coincideTitulo = src.toLowerCase().includes(filtro);

    if (coincideCategoria || coincideTitulo) {
      libro.style.display = 'block'; // Muestra el libro si coincide con la categoría o el título
    } else {
      libro.style.display = 'none'; // Oculta el libro si no coincide con la categoría ni el título
    }
  });
}
const botonReiniciar = document.querySelector('.categoria[data-categoria=""]')
const inputBusqueda = document.getElementById('buscador');

botonReiniciar.addEventListener('click', () =>{
  inputBusqueda.value = '';
});
