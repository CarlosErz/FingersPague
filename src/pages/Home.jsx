import '../styles/pages/home.css';
import homeimagen from '../assets/homeimage.webp';
import { Doc } from './sections/Doc.jsx';
import { Nav } from '../components/Nav.jsx'
import { Codelibrary } from '../pages/sections/Codelibrary.jsx';
import {Code} from '../pages/sections/code.jsx'

export function Home() {


  return (
    <>
      <section id='home' className='home_section'>
        <Nav />
        <div className="home_content">
          <div className="home_flex">
            <div title='Nombre del Producto Fingers bot' className="home_text">
              <span>Fingers</span>
              <div className="home_bot">
                <span>Bot</span>
              </div>
            </div>
            <img title='Mano entre cerrada' src={homeimagen} className="homeimagen" alt='Mano entrecerrada ' />
          </div>
        </div>
      </section>
      <Doc/>
      <Codelibrary />
      <Code/>
    </>
  );
}
