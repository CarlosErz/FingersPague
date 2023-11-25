import { Home } from './pages/Home'
import './styles/main.css'
import './styles/font.css'
import './styles/pages/Home.css'
import background from './assets/BACKGROUND.webp'
function App() {
  return (
    <>
      <div className="background_container">
        <img src={background} alt="Fondo con degradado" />
      </div>
      <Home />



    </>
  )
}

export default App
