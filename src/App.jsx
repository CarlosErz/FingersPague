import { Home } from './pages/Home'
import video_fondo from './assets/Video Fondo_final.mp4'
import './styles/main.css'
import './styles/font.css'

import background from './assets/BACKGROUND.webp'
function App() {
  return (
    <>
      <div className="background_container">
        <video src={video_fondo}  preload={background}  loop  autoPlay  muted>
        
        </video>
        <img src={background} alt="Fondo con degradado" />
      </div>
      <Home />
    </>
  )
}

export default App
