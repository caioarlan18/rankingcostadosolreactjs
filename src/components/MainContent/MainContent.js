import stylesMobile from './MainContent.mobile.module.css'
import stylesDesktop from './MainContent.desktop.module.css'
import MainImage from '../../images/foto-main.jpg'
import MainImage2 from '../../images/4262849.jpg'
function MainContent() {
    return (
        <main className={`${stylesMobile.mn} ${stylesDesktop.mn}`}>
            <div className={`${stylesMobile.mn1} ${stylesDesktop.mn1}`}>
                <img src={MainImage} alt="imagem principal do site" onClick="reg()" />
            </div>
            <div class={`${stylesMobile.mn2} ${stylesDesktop.mn2}`}>
                <img src={MainImage2} alt="imagem principal do site" />
            </div>
        </main>
    )
}
export default MainContent