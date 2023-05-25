import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import LogoSite from '../../images/logo do site.png'
import stylesMobile from './Header.mobile.module.css'
import stylesDesktop from './Header.desktop.module.css'
function Header() {
    return (
        <header className={`${stylesMobile.hdd} ${stylesDesktop.hdd}`}>
            <div className={`${stylesMobile.hdd1} ${stylesDesktop.hdd1}`}>
                <FaBars />
            </div>
            <div className={`${stylesMobile.hdd1} ${stylesDesktop.hdd1}`}>
                <h1 className={`${stylesMobile.orient} ${stylesDesktop.orient}`}>Home</h1>
            </div>
            <div className={`${stylesMobile.hdd1} ${stylesDesktop.hdd1}`}>
                <img src={LogoSite} alt="logo principal do site" height="170px" onclick="logo()" />
            </div>
        </header>

    )
}
export default Header