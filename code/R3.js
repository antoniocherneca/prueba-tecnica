function cerrarVideo() {
  document.querySelector('.video').removeAttribute('src')
}

function recargarVideo() {
  document.querySelector('.video').setAttribute('src', 'video/Concierto de Aranjuez.mp4')
}