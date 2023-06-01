import stylesMobile from './PreOrg.mobile.module.css'
import stylesDesktop from './PreOrg.desktop.module.css'
import Header from '../../Header/Header'
import HeaderBottom from '../../Header/HeaderBottom'
import RaqueteIcon from '../../../images/raquete.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function PreOrg() {
    return (
        <div>
            <Header orient='Painel' />
            <section className={`${stylesMobile.plogin} ${stylesDesktop.plogin}`}>
                <div class={`${stylesMobile.plogin1} ${stylesDesktop.plogin1}`}>
                    <h1>Bem Vindo</h1>
                </div>
                <div class={`${stylesMobile.plogin1} ${stylesDesktop.plogin1}`}>
                    <Link to={'/paineladmin'}><button class={`${stylesMobile.ctp} ${stylesDesktop.ctp}`}>Começar Torneio</button></Link>
                    <Link to={'/paineladmin2'}><button class={`${stylesMobile.epp} ${stylesDesktop.epp}`}>Editar Pontuações</button></Link>
                </div>
                <img src={RaqueteIcon} alt="icone de raquete" width="150px" />
            </section>
            <HeaderBottom />
        </div>
    )
}
export default PreOrg