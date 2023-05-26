import stylesMobile from './ChavA.mobile.module.css'
import stylesDesktop from './ChavA.desktop.module.css'
function ChavA() {

    return (
        <div className={`${stylesMobile.teste} ${stylesDesktop.teste}`}>

        </div>
    )
}
export default ChavA