import cv from '/src/assets/icons/opencv-icon.svg'
import mediapipe from '/src/assets/icons/mediapipe_icon.svg'
import python from '/src/assets/icons/PythonLogo.svg'
import c from '/src/assets/icons/c.svg'
import '/src/styles/pages/librarys.css'
export function Codelibrary() {
  return (
    <>
    <section className="librarys">
      <div className="librarys_flex">
        <h2 className="library_title">
        LIBRARIES
        </h2>
        <div className="librarys_icons_flex">
          <img src={cv} alt="OpenCV logo" title='Open cv logo'/>
        
        <img src={mediapipe} alt="Mediapipe Logo" title='MediapipeLogo'/>
      </div>
      </div>
    </section>
    <section className="librarys">
      <div className="librarys_flex">
        <h2 className="library_title">
        LANGUAGES
        </h2>
        <div className="librarys_icons_flex">
          <img className='python' src={python} alt="Logo de python" title='Python Logo'/>
        
        <img src={c} alt="Logo de C++"  title='C++ LOGO'/>
      </div>
      </div>
    </section>
   

    </>
  )
}