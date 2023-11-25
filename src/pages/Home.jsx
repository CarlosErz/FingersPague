import '../styles/pages/home.css';
import background from '../assets/BACKGROUND.jpg';
import logo from '../assets/logo.png';
import homeimagen from '../assets/homeimage.png';

export function Home() {
  return (
    <>
      <section className='home_section'>
        <div className="background_container">
          <img src={background} alt="" />
        </div>
        <nav className="nav_content">
          <img className='nav_logo' src={logo} alt="" />
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>

        <div className="home_content">
          <div className="home_flex">
            <div className="home_text">
              <span>Fingers</span>
              <div className="home_bot">
                <span>Bot</span>
              </div>
            </div>
            <img src={homeimagen} alt="" className="homeimagen" />
          </div>
        </div>
      </section>
    </>
  );
}
