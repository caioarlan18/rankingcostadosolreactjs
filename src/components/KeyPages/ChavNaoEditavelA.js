import stylesMobile from './ChavNaoEditavelA.mobile.module.css'
import stylesDesktop from './ChavNaoEditavelA.desktop.module.css'
import Header from '../Header/Header'
import HeaderBottom from '../Header/HeaderBottom'
import React, { useRef } from 'react';
function ChavA() {
    const tagRef = useRef(null);
    return (
        <section className={`${stylesMobile.chav} ${stylesDesktop.chav}`} >
            <Header />
            <div className={`${stylesMobile.tabela_10} ${stylesDesktop.tabela_10}`}>
                <div class={`${stylesMobile.chav_1} ${stylesDesktop.chav_1}`}>
                    <h1>Chaveamento - Categoria A</h1>
                </div>
                <table ref={tagRef} id="chavNaoEditavel">
                    <tr>
                        <td className={`${stylesMobile.esp} ${stylesDesktop.esp}`}>1</td>
                        <td className={`${stylesMobile.esp} ${stylesDesktop.esp}`}>2</td>
                    </tr>

                </table>
            </div>
            <HeaderBottom />
        </section>
    )
}
export default ChavA