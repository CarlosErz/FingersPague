
import '../styles/pages/home.css'
import background from '../assets/BACKGROUND.jpg'
import homeimagen from '../assets/homeimage.png'

export function Home() {
    return (
        <>
            <section className='home_section'>
                <div className="background_container">
                    <img src={background} alt="" />
                </div>
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

    )
}