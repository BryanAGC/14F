document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'cuponcito.jpeg'; // Ruta de la imagen JPEG.
    link.download = 'cuponcito.jpeg'; // Aseguramos que el archivo descargado tenga la extensión correcta.
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
