import Mano2 from '/src/assets/Mano2.png'
import '/src/styles/pages/Doc.css'

export function Doc() {
  return (
    <>
      <section className="content_documentacion">
        <div className="documentacion_flex">
          <img src={Mano2} alt="  Mano abierta " />
          <div className="e78_16"></div>
          <div className="documentacion_order">
            <h2 className="documentacion_word">
              TOGETHER BUILDING A LIMITLESS TOMORROW
            </h2>

            <a href="" className="documentacion_btn">Documentacion</a>
          </div>

        </div>
      </section>

    </>
  )
}