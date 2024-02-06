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
    const ext = archivo.split('.').pop().toLowerCase();

    // Ignora carpetas y archivos que no sean WebP
    if (fs.lstatSync(rutaEntrada).isDirectory() || ext !== 'webp') {
      console.log(`${archivo} ignorada.`);
      continue;
    }

    // Procesa y optimiza el archivo WebP
    try {
      const rutaSalida = `${carpetaSalida}/${archivo}`;
      await sharp(rutaEntrada).webp({ quality: 90 }).toFile(rutaSalida);
      console.log(`${archivo} procesada con éxito.`);
    } catch (error) {
      console.error(`Error al procesar ${archivo}:`, error);
    }
  }
});
