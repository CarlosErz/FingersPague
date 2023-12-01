import { Home } from './pages/Home'
import video_fondo from './assets/Video Fondo_final.mp4'
import './styles/main.css'
import './styles/font.css'

import background from './assets/BACKGROUND.webp'
import { useState, useEffect } from 'react';

function App() {
  const [videoPlayed, setVideoPlayed] = useState(false);

  useEffect(() => {
    const video = document.getElementById('videoFondo');

    const playVideoOnScroll = () => {
      if (!videoPlayed) {
        const videoTop = video.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (videoTop < windowHeight * 0.75) {
          video.play().catch(error => {
            // Manejar errores de reproducción aquí
            console.error('Error reproduciendo el video:', error);
          });
          setVideoPlayed(true);

          // Eliminar el event listener una vez que se ha reproducido el video
          window.removeEventListener('scroll', playVideoOnScroll);
        }
      }
    };

    // Agregar event listener para detectar el desplazamiento
    window.addEventListener('scroll', playVideoOnScroll);

    // Eliminar el event listener cuando se desmonte el componente
    return () => {
      window.removeEventListener('scroll', playVideoOnScroll);
    };
  }, [videoPlayed]);

  return (
    <>
      <div className="background_container">
        <video id="videoFondo" src={video_fondo} preload="auto" loop autoPlay muted>
          Tu navegador no admite la etiqueta de video.
        </video>
        <img src={background} alt="Fondo con degradado" />
      </div>
      <Home />
    </>
  );
}

export default App;
