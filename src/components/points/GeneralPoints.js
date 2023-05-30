import stylesMobile from './GeneralPoints.mobile.module.css'
import stylesDesktop from './GeneralPoints.desktop.module.css'
import React, { useEffect } from 'react';
import Header from '../Header/Header'
import HeaderBottom from '../Header/HeaderBottom'
function GeneralPoints() {
    useEffect(() => {

    })
    var e11a = document.querySelector(`.${stylesMobile.tabela_1}`)
    var e12a = document.querySelector(`.${stylesMobile.tabela_2}`)
    var e13a = document.querySelector(`.${stylesMobile.tabela_3}`)
    var e14a = document.querySelector(`.${stylesMobile.tabela_4}`)
    var e15a = document.querySelector(`.${stylesMobile.tabela_5}`)
    var e16a = document.querySelector(`.${stylesMobile.tabela_6}`)
    var e17a = document.querySelector(`.${stylesMobile.tabela_7}`)

    var e11b = document.querySelector(`.${stylesMobile.tabela2}`)
    var e12b = document.querySelector(`.${stylesMobile.tabela3}`)
    var e13b = document.querySelector(`.${stylesMobile.tabela4}`)
    var e14b = document.querySelector(`.${stylesMobile.tabela5}`)
    var e15b = document.querySelector(`.${stylesMobile.tabela6}`)
    var e16b = document.querySelector(`.${stylesMobile.tabela7}`)
    var e17b = document.querySelector(`.${stylesMobile.tabela8}`)

    var oi1 = document.querySelector("div#oi1")
    var oi2 = document.querySelector("div#oi2")
    var oi3 = document.querySelector("div#oi3")
    var oi4 = document.querySelector("div#oi4")
    var oi5 = document.querySelector("div#oi5")
    var oi6 = document.querySelector("div#oi6")

    function e1a() {
        e17a.classList.toggle(`${stylesMobile.bl}`)
        e17b.classList.toggle(`${stylesMobile.blb}`)
        oi1.classList.remove(`${stylesMobile.none}`)
        oi2.classList.toggle(`${stylesMobile.none}`)
        oi3.classList.toggle(`${stylesMobile.none}`)
        oi4.classList.toggle(`${stylesMobile.none}`)
        oi5.classList.toggle(`${stylesMobile.none}`)
        oi6.classList.toggle(`${stylesMobile.none}`)
        oi1.classList.toggle(`${stylesMobile.ordem}`)
        window.scrollTo({ top: 0, behavior: 'smooth' });


    }
    function e2a() {
        e12a.classList.toggle(`${stylesMobile.bl}`)
        e12b.classList.toggle(`${stylesMobile.blb}`)
        oi1.classList.toggle(`${stylesMobile.none}`)
        oi2.classList.remove(`${stylesMobile.none}`)
        oi3.classList.toggle(`${stylesMobile.none}`)
        oi4.classList.toggle(`${stylesMobile.none}`)
        oi5.classList.toggle(`${stylesMobile.none}`)
        oi6.classList.toggle(`${stylesMobile.none}`)
        oi2.classList.toggle(`${stylesMobile.ordem}`)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function e3a() {
        e13a.classList.toggle(`${stylesMobile.bl}`)
        e13b.classList.toggle(`${stylesMobile.blb}`)
        oi1.classList.toggle(`${stylesMobile.none}`)
        oi2.classList.toggle(`${stylesMobile.none}`)
        oi3.classList.remove(`${stylesMobile.none}`)
        oi4.classList.toggle(`${stylesMobile.none}`)
        oi5.classList.toggle(`${stylesMobile.none}`)
        oi6.classList.toggle(`${stylesMobile.none}`)
        oi3.classList.toggle(`${stylesMobile.none}`)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function e4a() {
        e14a.classList.toggle(`${stylesMobile.bl}`)
        e14b.classList.toggle(`${stylesMobile.blb}`)
        oi1.classList.toggle(`${stylesMobile.none}`)
        oi2.classList.toggle(`${stylesMobile.none}`)
        oi3.classList.toggle(`${stylesMobile.none}`)
        oi4.classList.remove(`${stylesMobile.none}`)
        oi5.classList.toggle(`${stylesMobile.none}`)
        oi6.classList.toggle(`${stylesMobile.none}`)
        oi4.classList.toggle(`${stylesMobile.ordem}`)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function e5a() {
        e15a.classList.toggle(`${stylesMobile.bl}`)
        e15b.classList.toggle(`${stylesMobile.blb}`)
        oi1.classList.toggle(`${stylesMobile.none}`)
        oi2.classList.toggle(`${stylesMobile.none}`)
        oi3.classList.toggle(`${stylesMobile.none}`)
        oi4.classList.toggle(`${stylesMobile.none}`)
        oi5.classList.remove(`${stylesMobile.none}`)
        oi6.classList.toggle(`${stylesMobile.none}`)
        oi5.classList.toggle(`${stylesMobile.ordem}`)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function e6a() {
        e16a.classList.toggle(`${stylesMobile.bl}`)
        e16b.classList.toggle(`${stylesMobile.blb}`)
        oi1.classList.toggle(`${stylesMobile.none}`)
        oi2.classList.toggle(`${stylesMobile.none}`)
        oi3.classList.toggle(`${stylesMobile.none}`)
        oi4.classList.toggle(`${stylesMobile.none}`)
        oi5.classList.toggle(`${stylesMobile.none}`)
        oi6.classList.remove(`${stylesMobile.none}`)
        oi6.classList.toggle(`${stylesMobile.ordem}`)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const boxes = document.querySelectorAll(`.${stylesMobile.drop18}`);
    let isBoxHidden = false;

    boxes.forEach((box) => {
        box.addEventListener('click', () => {
            // se as divs estão visíveis, esconde todas e move a clicada para o topo
            if (!isBoxHidden) {
                boxes.forEach((box2) => {
                    if (box2 !== box) {
                        box2.style.display = stylesMobile.none;
                    }
                });
                box.style.order = '-1';
                isBoxHidden = true;
            } else { // se as divs estão escondidas, mostra todas
                boxes.forEach((box2) => {
                    box2.style.display = 'block';
                    box2.style.order = 'initial';
                });
                isBoxHidden = false;
            }
        });
    });
    return (
        <div>

            <section className={`${stylesMobile.sec} ${stylesDesktop.sec}`}>

                <div className={`${stylesMobile.drop1} ${stylesDesktop.drop1}`} id="drop">
                    <div className={`${stylesMobile.drop17} ${stylesDesktop.drop17}`}>
                        <div className={`${stylesMobile.drop18} ${stylesDesktop.drop18}`} onClick={e6a}>
                            <h1>Etapa 6 <p>A definir</p>
                            </h1>
                            <div className={`${stylesMobile.tabela_6} ${stylesDesktop.tabela_6}`}>
                                <h1>Categoria A</h1>
                                <table id="tabelaNaoEditavele6" className={`${stylesMobile.tabelae6} ${stylesDesktop.tabelae6}`}>

                                </table>
                            </div>

                            <div className={`${stylesMobile.tabela7} ${stylesDesktop.tabela7}`}>
                                <h1>Categoria B</h1>
                                <table id="tabelaNaoEditavel7" className={`${stylesMobile.tabela1} ${stylesDesktop.tabela1}`}>


                                </table>
                            </div>
                        </div>
                        <div className={`${stylesMobile.drop18} ${stylesDesktop.drop18}`} onClick={e5a}>
                            <h1>Etapa 5 <p>A definir</p>
                            </h1>
                            <div className={`${stylesMobile.tabela_5} ${stylesDesktop.tabela_5}`}>
                                <h1>Categoria A</h1>
                                <table id="tabelaNaoEditavele5" className={`${stylesMobile.tabelae5} ${stylesDesktop.tabelae5}`}>

                                </table>
                            </div>

                            <div className={`${stylesMobile.tabela6} ${stylesDesktop.tabela6}`}>
                                <h1>Categoria B</h1>
                                <table id="tabelaNaoEditavel6" className={`${stylesMobile.tabela1} ${stylesDesktop.tabela1}`}>


                                </table>
                            </div>
                        </div>
                        <div className={`${stylesMobile.drop18} ${stylesDesktop.drop18}`} onClick={e4a}>
                            <h1>Etapa 4 <p>A definir</p>
                            </h1>
                            <div className={`${stylesMobile.tabela_4} ${stylesDesktop.tabela_4}`}>
                                <h1>Categoria A</h1>
                                <table id="tabelaNaoEditavele4" className={`${stylesMobile.tabelae4} ${stylesDesktop.tabelae4}`}>

                                </table>
                            </div>
                            <div className={`${stylesMobile.tabela5} ${stylesDesktop.tabela5}`}>
                                <h1>Categoria B</h1>
                                <table id="tabelaNaoEditavel5" className={`${stylesMobile.tabela1} ${stylesDesktop.tabela1}`}>


                                </table>
                            </div>


                        </div>
                        <div className={`${stylesMobile.drop18} ${stylesDesktop.drop18}`} onClick={e3a}>
                            <h1>Etapa 3 <p>A definir</p>
                            </h1>
                            <div className={`${stylesMobile.tabela_3} ${stylesDesktop.tabela_3}`}>
                                <h1>Categoria A</h1>
                                <table id="tabelaNaoEditavele3" className={`${stylesMobile.tabelae3} ${stylesDesktop.tabelae3}`}>

                                </table>

                            </div>
                            <div className={`${stylesMobile.tabela4} ${stylesDesktop.tabela4}`}>
                                <h1>Categoria B</h1>
                                <table id="tabelaNaoEditavel4" className={`${stylesMobile.tabela1} ${stylesDesktop.tabela1}`}>


                                </table>
                            </div>
                        </div>
                        <div className={`${stylesMobile.drop18} ${stylesDesktop.drop18}`} onClick={e2a}>
                            <h1>Etapa 2 <p>Rio das Ostras</p>
                            </h1>
                            <div className={`${stylesMobile.tabela_2} ${stylesDesktop.tabela_2}`}>
                                <h1>Categoria A</h1>
                                <table id="tabelaNaoEditavele2" className={`${stylesMobile.tabelae2} ${stylesDesktop.tabelae2}`}>
                                    <tr>
                                        <td>Gabriel Pinho</td>
                                        <td>200 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Evandro Manhães</td>
                                        <td>160 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Gabriel Siqueira</td>
                                        <td>110 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Guilherme Santos</td>
                                        <td>110 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Boryel Andrade</td>
                                        <td>50 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Caio Arlan</td>
                                        <td>50 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Mauro Gravina</td>
                                        <td>50 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Maickom Silva</td>
                                        <td>50 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Natanael Andrade</td>
                                        <td>30 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Mario Cure</td>
                                        <td>30 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Kauã Tavares</td>
                                        <td>30 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Gilbert Vilalva</td>
                                        <td>30 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Márcio Senna</td>
                                        <td>30 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Elecides Teixeira</td>
                                        <td>30 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Evandro Ferreira</td>
                                        <td>30 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Gabriel Figuereido</td>
                                        <td>0 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Luiz Motta</td>
                                        <td>0 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Raul Souza</td>
                                        <td>0 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Luciano Duarte</td>
                                        <td>0 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Victor Bandeira</td>
                                        <td>0 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Gabriel Aragutti</td>
                                        <td>0 Pontos</td>
                                    </tr>
                                </table>
                            </div>
                            <div className={`${stylesMobile.tabela3} ${stylesDesktop.tabela3}`}>
                                <h1>Categoria B</h1>
                                <table id="tabelaNaoEditavel3" className={`${stylesMobile.tabela1} ${stylesDesktop.tabela1}`}>
                                    <tr>
                                        <td>Mauro Gravina</td>
                                        <td>200 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Victor Carvalho</td>
                                        <td>160 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Rodrigo Rodovalho</td>
                                        <td>110 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Gustavo Nogueira</td>
                                        <td>110 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Victor Figueredo</td>
                                        <td>50 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Márcio Senna</td>
                                        <td>50 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Gabriel Figueiredo</td>
                                        <td>50 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Marcos Antônio Gomes</td>
                                        <td>50 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Kauã Tavares</td>
                                        <td>30 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Walanem Figueiredo</td>
                                        <td>30 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Peter Mariano</td>
                                        <td>30 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Paulo Hallais</td>
                                        <td>30 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Marcelo Marmelo</td>
                                        <td>30 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Lucas Santana Amorim</td>
                                        <td>30 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Leonardo Braga</td>
                                        <td>30 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Gabriel Oliveira Pereira</td>
                                        <td>30 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Mario Cure</td>
                                        <td>10 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>João Vilela</td>
                                        <td>10 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Marcus Muniz</td>
                                        <td>10 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Vitor Fogaça</td>
                                        <td>10 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Elecides Teixeira</td>
                                        <td>10 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Victor Bandeira</td>
                                        <td>0 Pontos</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className={`${stylesMobile.drop18} ${stylesDesktop.drop18}`} onClick={e1a}>
                            <h1>Etapa 1 <p>Cabo Frio</p>
                            </h1>


                            <div className={`${stylesMobile.tabela_7} ${stylesDesktop.tabela_7}`}>
                                <h1>Categoria A</h1>
                                <table id="tabelaNaoEditavele7" className={`${stylesMobile.tabelae7} ${stylesDesktop.tabelae7}`}>
                                    <tr>
                                        <td>Gabriel Pinho</td>
                                        <td>100 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Gabriel Aragutti</td>
                                        <td>80 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Boryel Andrade</td>
                                        <td>55 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Caio Arlan</td>
                                        <td>55 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Natanael Andrade</td>
                                        <td>25 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Gabriel Siqueira</td>
                                        <td>25 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Guilherme Santos</td>
                                        <td>25 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Mauro Gravina</td>
                                        <td>25 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Luiz Motta</td>
                                        <td>15 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Raul Souza</td>
                                        <td>15 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Luciano Duarte</td>
                                        <td>15 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Maickon Silva</td>
                                        <td>15 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Evandro Manhães</td>
                                        <td>15 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Mário Cure</td>
                                        <td>15 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Kauã Tavares</td>
                                        <td>15 Pontos</td>
                                    </tr>
                                </table>
                            </div>

                            <div className={`${stylesMobile.tabela8} ${stylesDesktop.tabela8}`}>
                                <h1>Categoria B</h1>
                                <table id="tabelaNaoEditavele8" className={`${stylesMobile.tabela1} ${stylesDesktop.tabela1}`}>
                                    <tr>
                                        <td>Mauro Gravina</td>
                                        <td>100 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Kauã Tavares</td>
                                        <td>80 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Mario Cure</td>
                                        <td>55 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>João Vilella</td>
                                        <td>55 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Rodrigo Rodovalho</td>
                                        <td>25 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Victor Carvalho</td>
                                        <td>25 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Walanem Figueredo</td>
                                        <td>25 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Victor Figueredo</td>
                                        <td>25 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Peter Mariano</td>
                                        <td>5 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Márcio Senna</td>
                                        <td>5 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Paulo Hallais</td>
                                        <td>5 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Victor Bandeira</td>
                                        <td>5 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Marcus Muniz</td>
                                        <td>5 Pontos</td>
                                    </tr>
                                    <tr>
                                        <td>Marcelo Marmelo</td>
                                        <td>5 Pontos</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className={`${stylesMobile.drop19} ${stylesDesktop.drop19}`}>
                        <div className={`${stylesMobile.drop20} ${stylesDesktop.drop20}`} id="oi6">
                            <h1>05/07 <br /> 2023</h1>
                        </div>
                        <div className={`${stylesMobile.drop20} ${stylesDesktop.drop20}`} id="oi5">
                            <h1>05/06 <br /> 2023</h1>
                        </div>
                        <div className={`${stylesMobile.drop20} ${stylesDesktop.drop20}`} id="oi4">
                            <h1>05/05 <br /> 2023</h1>
                        </div>
                        <div className={`${stylesMobile.drop20} ${stylesDesktop.drop20}`} id="oi3">
                            <h1>28/05 <br /> 2023</h1>
                        </div>
                        <div className={`${stylesMobile.drop20} ${stylesDesktop.drop20}`} id="oi2">
                            <h1>05/03 <br /> 2023</h1>
                        </div>
                        <div className={`${stylesMobile.drop20} ${stylesDesktop.drop20}`} id="oi1">
                            <h1>05/02 <br /> 2023</h1>
                        </div>

                    </div>
                </div>

                <div className={`${stylesMobile.point_geral} ${stylesDesktop.point_geral}`}>
                    <div className={`${stylesMobile.maintxtpt} ${stylesDesktop.maintxtpt}`}>
                        <h1>Pontuação Geral 2023</h1>
                    </div>

                    <div className={`${stylesMobile.tabela_1} ${stylesDesktop.tabela_1}`}>
                        <h1>Categoria A</h1>
                        <table id="tabelaNaoEditavel" className={`${stylesMobile.tabela} ${stylesDesktop.tabela}`}>

                        </table>
                    </div>


                    <div className={`${stylesMobile.tabela2} ${stylesDesktop.tabela2}`}>
                        <h1>Categoria B</h1>
                        <table id="tabelaNaoEditavel2" className={`${stylesMobile.tabela1} ${stylesDesktop.tabela1}`}>


                        </table>
                    </div>

                </div>
            </section>
            <div className={`${stylesMobile.overlay} ${stylesDesktop.overlay}`} onClick="sumir()"></div>
            <HeaderBottom />
        </div>
    )
}
export default GeneralPoints