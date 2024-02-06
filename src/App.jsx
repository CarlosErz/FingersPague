import { Home } from './pages/Home'
import video_fondo from './assets/Video Fondo_final.mp4'
import './styles/main.css'
import './styles/font.css'

import background from './assets/BACKGROUND.webp'
function App() {
  return (
    <>
      <div className="background_container">
        <video className="fondo"  autoPlay muted loop>
          <source src={video_fondo} type="video/mp4" />
        </video>
        <img className='bg' src={background} alt="Fondo con degradado" />
      </div>
      <Home />
    </>
  )
}

export default App
