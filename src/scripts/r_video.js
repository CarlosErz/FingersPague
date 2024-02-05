// Importar el módulo de ffmpeg
import ffmpeg from 'fluent-ffmpeg';
// Importar el módulo de fs


const videoInputPath = '../assets/Video Fondo_final.mp4';
const videoOutputPath = '../assets/Video Fondo_final_comprimido.mp4';

ffmpeg(videoInputPath)
  .videoCodec('libx264')  // Codec de video para el archivo de salida
  .audioCodec('aac')      // Codec de audio para el archivo de salida
  .outputOptions('-crf 28')  // Valor de calidad. Valores más bajos implican mayor calidad
  .on('end', () => {
    console.log('Compresión completa');
  })
  .on('error', (err) => {
    console.error('Error durante la compresión:', err);
  })
  .save(videoOutputPath);
