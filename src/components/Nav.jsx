import logo from '../assets/logo.svg';
import { useState, useEffect } from 'react';
import '../styles/pages/nav.css';

export function Nav() {
  const [isSticky, setIsSticky] = useState(false);

  // Función para abrir el menú
  function openMenu() {
    document.querySelector('.nav_content_ul').classList.add('open');
    document.querySelector('.nav_content').classList.add('open')
    document.querySelector('.menu_icon').style.display = 'none';
    document.querySelector('.close_icon').style.display = 'block';
  }

  function closeMenu() {
    document.querySelector('.nav_content_ul').classList.remove('open');
    document.querySelector('.nav_content').classList.remove('open')
    document.querySelector('.menu_icon').style.display = 'block';
    document.querySelector('.close_icon').style.display = 'none';
  }

  useEffect(() => {
    function handleWindowSize() {
      if (window.innerWidth > 768) {
        document.querySelector('.nav_content_ul').classList.remove('open');
        document.querySelector('.menu_icon').style.display = 'none';
        document.querySelector('.close_icon').style.display = 'none';
      } else {
        document.querySelector('.menu_icon').style.display = 'block';
        if (!document.querySelector('.nav_content_ul').classList.contains('open')) {
          document.querySelector('.close_icon').style.display = 'none';
        }
      }
    }

    handleWindowSize();
    window.addEventListener('resize', handleWindowSize);

    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const threshold = 300;
      setIsSticky(scrollPosition < threshold);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className="nav-placeholder">
        <nav className={isSticky ? 'nav_content' : 'nav_content sticky'}>
          <a href="/">
            <img
              title="logotipo"
              className="nav_logo"
              src={logo}
              alt="logotipo que asemeja un mano en F"
            />
          </a>
          <span className="menu_icon" onClick={openMenu}>
            <svg width="35" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".5" y=".65564" width="34" height="4" rx="2" fill="#A9A9A9" /><rect x="12.5" y="8.65564" width="22" height="4" rx="2" fill="#A9A9A9" /><rect x="20.5" y="16.6556" width="14" height="4" rx="2" fill="#A9A9A9" /></svg>

          </span>
          <span className="close_icon" onClick={closeMenu}>
            <svg width="28" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.36972 1.45723c.75653-.804813 2.02226-.843952 2.82707-.08742L26.0555 21.9172c.8048.7566.844 2.0223.0874 2.8271-.7565.8048-2.0222.844-2.827.0874L1.45714 4.28431c-.804818-.75654-.843957-2.02226-.08742-2.82708Z" fill="#A9A9A9" /><path d="M1.33691 24.2181c-.738465-.8214-.671209-2.0859.15022-2.8244L23.797 1.33709c.8215-.738462 2.086-.671206 2.8245.15022.7384.82143.6712 2.08597-.1502 2.82444L4.16134 24.3684c-.82142.7384-2.08597.6712-2.82443-.1503Z" fill="#A9A9A9" /></svg>
          </span>

          <ul className='nav_content_ul'>
            <li><a title='Home' className='nav_link' href="#home">Home</a></li>
            <li><a title='Home' className='nav_link' href="#introducing">Introducing</a></li>
            <li><a className='nav_link' href="#documentacion">Documentacion</a></li>
            <li><a className='nav_link' href="#libraries">Libraries</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}