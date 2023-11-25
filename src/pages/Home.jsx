import background from '/home/user/myapp/src/assets/BACKGROUND.jpg'
import '../styles/pages/home.css'

export function Home(){
    return(
    <>
    <img className='background_home' src={background} alt="Imgane de fondo" srcset={background} />
    </>

    )
}