import fs from 'fs';
import sharp from 'sharp';

const carpetaEntrada = '../assets';
const carpetaSalida = '../assets/reducidas';

fs.readdir(carpetaEntrada, async (err, archivos) => {
  if (err) {
    console.error('Error al leer la carpeta de entrada:', err);
    return;
  }

  // Asegúrate de que la carpeta de salida exista
  if (!fs.existsSync(carpetaSalida)) {
    fs.mkdirSync(carpetaSalida);
  }

  // Procesa cada archivo en la carpeta de entrada
  for (const archivo of archivos) {
    const rutaEntrada = `${carpetaEntrada}/${archivo}`;

    // Ignora carpetas y archivos SVG
    if (fs.lstatSync(rutaEntrada).isDirectory() || archivo.endsWith('.svg')) {
      console.log(`${archivo} ignorada.`);
      continue;
    }

    const ext = archivo.split('.').pop().toLowerCase();
    const esImagen = ext === 'png' || ext === 'jpeg' || ext === 'jpg';

    // Verifica si el archivo es una imagen antes de procesarlo
    if (esImagen) {
      const rutaSalida = `${carpetaSalida}/${archivo.replace(/\.[^/.]+$/, '')}.webp`;
      await sharp(rutaEntrada)
        .webp({ quality: 90 })  // Reducir la calidad de la imagen a 50%
        .toFile(rutaSalida, (err) => {
          if (err) {
            console.error(`Error al procesar ${archivo}:`, err);
          } else {
            console.log(`${archivo} procesada con éxito.`);
          }
        });
    } else {
      // Si no es una imagen, simplemente copia el archivo a la carpeta de salida
      const rutaSalida = `${carpetaSalida}/${archivo}`;
      fs.copyFileSync(rutaEntrada, rutaSalida);
      console.log(`${archivo} copiada sin procesamiento.`);
    }
  }
});
