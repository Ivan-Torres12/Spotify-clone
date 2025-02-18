export function handleSongClick(song, artist) {
  const displayElement = document.getElementById('selected-song');
  displayElement.innerHTML = `<h3>Reproduciendo: ${song}</h3><p>Artista: ${artist}</p>`;
}

// Función para agregar los listeners después de que se haya cargado el DOM
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.song-link');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Evitar que el enlace navegue
      const song = event.target.getAttribute('data-song');
      const artist = event.target.getAttribute('data-artist');
      handleSongClick(song, artist);
      console.log(song, artist)
    });
  });
});
