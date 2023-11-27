import '../styles/pages/home.css';
import { useEffect } from 'react';

import homeimagen from '../assets/homeimage.webp';
import { Doc } from './sections/Doc.jsx';
import { gsap, Power3, Power4 } from "gsap";
import { Nav } from '../components/Nav.jsx'
import { Codelibrary } from '../pages/sections/Codelibrary.jsx';
import {Code} from '../pages/sections/code.jsx'

export function Home() {

  useEffect(() => {
    const hands1 = document.querySelector('.homeimagen');
    const fingers = document.querySelector('.home_text span');
    const bot = document.querySelector('.home_bot ');
    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
    const ease = Power3.easeOut();

    tl.fromTo(
      hands1,
      { y: '100%', opacity: 0.5 },
      { y: '0%', duration: 1, ease: ease, opacity: 1 }
    );
    tl.fromTo(
      fingers,
      { opacity: 0, x: '100%' },
      { opacity: 1, x: '0%', duration: 2, ease: Power4 },
      '-=1'
    );
    tl.fromTo(
      bot,
      { opacity: 0, x: '-100%' },
      { opacity: 1, x: '0', duration: 2, ease: Power4 },
      '-=1'
    );

    // Devuelve la función de limpieza (cleanup) para GSAP si es necesario
    return () => {
      tl.kill(); // Detiene las animaciones si es necesario
    };
  }, []);

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
