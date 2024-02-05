import Mano2 from '/src/assets/Mano2.webp'
import '/src/styles/pages/Doc.css'
import Hand_descomponet from  '/src/assets/hand_descomponet.webp'

export function Doc() {
  return (
    <>
      <section id='introducing' className="introducing_fingers">
        <div className="introducing_fingers_flex">
          <img src={Hand_descomponet} alt="" className="introducing_fingers_img" />
          <div className="introducing_fingers_text">
            <h2 className="introducing_fingers_title">Introducing Fingers Bot</h2>
            <p className="introducing_fingers_paragraph">
              The fingers bot project had its origin in the concern for knowing how to create a robotic hand that would be very useful for people who may have the need to use it.
            </p>
          </div>
        </div>

      </section>
      <section id='documentacion' className="content_documentacion">
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