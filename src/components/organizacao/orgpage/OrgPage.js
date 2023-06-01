import stylesMobile from './OrgPage.mobile.module.css'
import stylesDesktop from './OrgPage.desktop.module.css'
import Header from '../../Header/Header'
import HeaderBottom from '../../Header/HeaderBottom'
function OrgPage() {
    return (
        <div>
            <Header orient={'Painel'} />

            <HeaderBottom />
        </div>
    )
}
export default OrgPage