import github from '../../assets/icons/github.svg'
import dwn from '../../assets/icons/download.svg'
import '../../styles/pages/code.css'


export function Code() {

  return (
    <section className="code">
      <h2 className="library_title">CODE/EXE</h2>
      <div className="flex_button_code">  <a href="https://github.com/CarlosErz/FingersBot"
        target="_blank"
        rel="noopener noreferrer"
        className="button_Git">
        <img src={github} alt="" />
        <span className="button_Git_span">GitHub</span>
      </a>
        <a className="button_Git" href="https://drive.google.com/file/d/1Xk1AyriJMLdwCSe8hVNrU3OsSenEqyNw/view?usp=drive_link" target="_blank"
          rel="noopener noreferrer">
          <img src={dwn} alt="" />
          <span className="button_Dwn_span">Download software</span>

        </a>

      </div>


    </section>
  );
}
