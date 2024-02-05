import { Home } from './pages/Home'
import video_fondo from './assets/Video Fondo_final.gif'
import './styles/main.css'
import './styles/font.css'

import background from './assets/BACKGROUND.webp'
function App() {
  return (
    <>
      <div className="background_container">
        <img className="fondo" src={video_fondo} alt="Fondo GIF" />
        <img className='bg' src={background} alt="Fondo con degradado" />
      </div>
      <Home />
    </>
  )
}

export default App
