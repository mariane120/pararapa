document.addEventListener("DOMContentLoaded", function () {

  console.log("Páxina cargada");

// Dónde estamos: tiendas
const ciudades = document.querySelectorAll('.bordeCiudades');

ciudades.forEach((bloque) => {
  const ciudad = bloque.querySelector('.cidade');
  const lista = bloque.querySelector('.listaTendas');
  const mas = bloque.querySelector('.mas');

  ciudad.addEventListener('click', () => {
    const visible = lista.style.display === 'block';

    // Cierra todas las demás listas (opcional)
    document.querySelectorAll('.listaTendas').forEach(l => l.style.display = 'none');
    document.querySelectorAll('.mas').forEach(m => m.textContent = '+');

    // Si no estaba visible, la abrimos
    if (!visible) {
      lista.style.display = 'block';
      mas.textContent = '–';
    }
  });
});

});

