import '../styles/pages/home.css';
import background from '../assets/BACKGROUND.jpg';
import logo from '../assets/logo.png';
import homeimagen from '../assets/homeimage.png';


export function Home() {
  // Función para abrir el menú
  function openMenu() {
    document.querySelector('.nav_content').classList.add('open');
  }

  // Función para cerrar el menú
  function closeMenu() {
    document.querySelector('.nav_content').classList.remove('open');
  }


  return (
    <>
      <section className='home_section'>
        <div className="background_container">
          <img src={background} alt="" />
        </div>
        <nav className="nav_content">
          <a href="">
            <img className='nav_logo' src={logo} alt="" />
          </a>

          {/* Icono del menú de hamburguesa para abrir el menú */}
          <span className="menu_icon" onClick={openMenu}>
          <svg width="35" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".5" y=".65564" width="34" height="4" rx="2" fill="#A9A9A9"/><rect x="12.5" y="8.65564" width="22" height="4" rx="2" fill="#A9A9A9"/><rect x="20.5" y="16.6556" width="14" height="4" rx="2" fill="#A9A9A9"/></svg>
            
          </span>

          {/* Icono para cerrar el menú */}
          <span className="close_icon" onClick={closeMenu}>
          <svg width="28" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.36972 1.45723c.75653-.804813 2.02226-.843952 2.82707-.08742L26.0555 21.9172c.8048.7566.844 2.0223.0874 2.8271-.7565.8048-2.0222.844-2.827.0874L1.45714 4.28431c-.804818-.75654-.843957-2.02226-.08742-2.82708Z" fill="#A9A9A9"/><path d="M1.33691 24.2181c-.738465-.8214-.671209-2.0859.15022-2.8244L23.797 1.33709c.8215-.738462 2.086-.671206 2.8245.15022.7384.82143.6712 2.08597-.1502 2.82444L4.16134 24.3684c-.82142.7384-2.08597.6712-2.82443-.1503Z" fill="#A9A9A9"/></svg>
          </span>

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
