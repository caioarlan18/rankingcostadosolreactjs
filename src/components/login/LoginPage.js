import stylesMobile from './LoginPage.mobile.module.css'
import stylesDesktop from './LoginPage.desktop.module.css'
import RaqueteIcon from '../../images/raquete.svg'
import Header from '../Header/Header'
import HeaderBottom from '../Header/HeaderBottom'
import { useState } from 'react'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [isLogged, setIsLogged] = useState(false)

    function aprovar() {
        if (email === '' || senha === '') {
            alert('Campos Vazios')
        } else if (email != 'rcstm.org' || senha != 'rcstm18') {
            alert('Email ou senha incorretos')

        } else if (email === 'rcstm.org' && senha === 'rcstm18') {
            setIsLogged(true)
        } else {
            alert('Erro desconhecido')
        }
    }
    if (isLogged) {
        window.location.href = '/pontuaçãogeral';
    }
    return (
        <div>
            <Header />
            <div className={`${stylesMobile.back} ${stylesDesktop.back}`}>

                <header className={`${stylesMobile.hd} ${stylesDesktop.hd}`}>
                    <div className={`${stylesMobile.hd_1} ${stylesDesktop.hd_1}`}>
                        <h1>Bem vindo </h1>

                    </div>
                    <div className={`${stylesMobile.hd_15} ${stylesDesktop.hd_15}`}>
                        <div className={`${stylesMobile.hdd_2} ${stylesDesktop.hdd_2}`}>
                            <input type="email" placeholder="Login" className={`${stylesMobile.email} ${stylesDesktop.email}`} onChange={(e) => { setEmail(e.target.value) }} />
                            <input type="password" placeholder="Senha" className={`${stylesMobile.senha} ${stylesDesktop.senha}`} onChange={(e) => { setSenha(e.target.value) }} />
                        </div>

                        <div className={`${stylesMobile.hd_3} ${stylesDesktop.hd_3}`}>
                            <input type="submit" value="Logar" className="entrar" onClick={aprovar} />

                        </div>
                    </div>
                </header>

                <img src={RaqueteIcon} alt="" width="150px" />
            </div>
            <HeaderBottom />
        </div>
    )
}
export default LoginPage