import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import LogoSite from '../../images/logo do site.png'
import stylesMobile from './Header.mobile.module.css'
import stylesDesktop from './Header.desktop.module.css'
import Arrow from '../../images/arrow-desktop.svg'

function Header() {
    function reg() {
        var orient = document.querySelector('h1.orient')

    }
    function MenuOpen() {
        var nv = document.querySelector(`.${stylesMobile.nv}`);
        nv.classList.toggle(stylesMobile.open);
        const overlay = document.querySelector(`.${stylesMobile.overlay}`);
        overlay.style.display = 'block';
    }
    function close() {
        var nv = document.querySelector(`.${stylesMobile.nv}`);
        nv.classList.remove(stylesMobile.open)
        const overlay = document.querySelector(`.${stylesMobile.overlay}`);
        overlay.style.display = 'none';
    }
    function subchavv(event) {
        event.preventDefault()
        var subglob = document.querySelector(`.${stylesMobile.subglob}`)
        subglob.classList.toggle(stylesMobile.subglobopen)
    }
    function sumir() {
        var menu = document.querySelector(`.${stylesMobile.nv}`)
        const overlay = document.querySelector(`.${stylesMobile.overlay}`);
        menu.classList.remove(stylesMobile.open)
        overlay.style.display = 'none';
    }
    return (
        <div>

            {/* cabeçalho mobile */}
            <header className={`${stylesMobile.hdd} ${stylesDesktop.hdd}`}>
                <div className={`${stylesMobile.hdd1} ${stylesDesktop.hdd1}`}>
                    <FaBars onClick={MenuOpen} />
                </div>
                <div className={`${stylesMobile.hdd1} ${stylesDesktop.hdd1}`}>
                    <h1 className={`${stylesMobile.orient} ${stylesDesktop.orient}`}>Home</h1>
                </div>
                <div className={`${stylesMobile.hdd1} ${stylesDesktop.hdd1}`}>
                    <img src={LogoSite} alt="logo principal do site" height="170px" />
                </div>
            </header>

            {/* cabeçalho desktop */}
            <header className={`${stylesMobile.hdddesk} ${stylesDesktop.hdddesk}`}>

                <div className={`${stylesMobile.hd2} ${stylesDesktop.hd2}`}>
                    <img src={LogoSite} alt="logo principal do site" width="250px" height="250px" />
                </div>
                <div className={`${stylesMobile.hd2} ${stylesDesktop.hd2}`}>
                    <li>
                        <a href="#" onclick="home()">Home</a><img src={Arrow} alt="" width="15px"
                            height="15px" class="arrow" onclick="arrow()" />
                    </li>
                    <a href="https://www.instagram.com/tmprogressocabofrio/" className={`${stylesMobile.submenu3} ${stylesDesktop.submenu3}`}>Instagram</a>
                    <a href="https://www.facebook.com/tmprogresso.cabofrio.5" className={`${stylesMobile.submenu4} ${stylesDesktop.submenu4}`}>Facebook</a>
                </div>
                <div className={`${stylesMobile.hd2} ${stylesDesktop.hd2}`}>
                    <li><a href="#" onClick={reg}>Regulamentos</a></li>
                </div>
                <div className={`${stylesMobile.hd2} ${stylesDesktop.hd2}`}>
                    <li><a href="#" onclick="chav()">Chaveamento</a></li>
                </div>
                <div className={`${stylesMobile.hd2} ${stylesDesktop.hd2}`}>
                    <li><a href="#" onclick="org()">Entrar como organizador</a></li>
                </div>

            </header>
            {/* menu hamburguer mobile */}
            <nav className={`${stylesMobile.nv} ${stylesDesktop.nv}`}>

                <FaTimes onClick={close} className={`${stylesMobile.close}`} />
                <ul>
                    <Link to='/' onClick={close}><li>Home</li></Link>

                    <Link> <li onClick={subchavv}>Chaveamento

                        <div className={`${stylesMobile.subglob} ${stylesDesktop.subglob}`}>
                            <Link to='/chaveamentoA' onClick={close} className={`${stylesMobile.subchav1} ${stylesDesktop.subchav1}`}>Categoria A</Link>
                            <Link to='/chaveamentoB' onClick={close} className={`${stylesMobile.subchav2} ${stylesDesktop.subchav2}`}>Categoria B</Link>
                        </div>

                    </li>
                    </Link>
                    <Link to='/organização' onClick={close}> <li >Painel</li></Link>

                    <div className={stylesMobile.redes}>
                        <a href="https://www.instagram.com/tmprogressocabofrio/">
                            <FaInstagram />
                        </a>

                        <a href="https://www.facebook.com/tmprogresso.cabofrio.5">
                            <FaFacebook />
                        </a>
                    </div>
                </ul>

            </nav>
            <div className={`${stylesMobile.overlay}`} onClick={sumir}></div>
        </div >
    )
}
export default Header