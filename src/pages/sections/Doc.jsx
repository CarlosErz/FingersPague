import Mano2 from '/src/assets/Mano2.png'
import '/src/styles/pages/Doc.css'

export function Doc() {
  return (
    <>
      <section className="content_documentacion">
        <div className="documentacion_flex">
          <img src={Mano2} alt="  Mano abierta " />
          <div className="documentacion_order">
            <h2 className="documentacion_word">
              TOGETHER BUILDING A LIMITLESS TOMORROW
            </h2>

            <a href="https://drive.google.com/file/d/1ou0TykHbMp_y2RHhzIehaz3O1qlQQCKZ/view" className="documentacion_btn">Documentacion</a>
          </div>

        </div>
      </section>

    </>
  )
}