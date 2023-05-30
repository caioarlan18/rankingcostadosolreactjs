import stylesMobile from './GeneralPoints.mobile.module.css'
import stylesDesktop from './GeneralPoints.desktop.module.css'
import Header from '../Header/Header'
import HeaderBottom from '../Header/HeaderBottom'
import { useState } from 'react';

function GeneralPoints() {
    const [etapa6, setEtapa6] = useState(false)
    const [etapa5, setEtapa5] = useState(false)
    const [etapa4, setEtapa4] = useState(false)
    const [etapa3, setEtapa3] = useState(false)
    const [etapa2, setEtapa2] = useState(false)
    const [etapa1, setEtapa1] = useState(false)



    return (
        <div>
            <Header />
            <section className={`${stylesMobile.sec} ${stylesDesktop.sec}`}>

                <div className={`${stylesMobile.drop1} ${stylesDesktop.drop1}`} id="drop">
                    <div className={`${stylesMobile.drop17} ${stylesDesktop.drop17}`}>
                        <div className={`${stylesMobile.drop18} ${stylesDesktop.drop18}`} onClick={() => { setEtapa6(!etapa6) }}>

                            <h1>Etapa 6 <p>A definir</p>
                            </h1>
                            <div className={`${stylesMobile.tabela_6} ${stylesDesktop.tabela_6}`} style={{ display: etapa6 ? 'block' : 'none' }}>
                                <h1>Categoria A</h1>
                                <table id="tabelaNaoEditavele6" className={`${stylesMobile.tabelae6} ${stylesDesktop.tabelae6}`}>

                                </table>
                            </div>

                            <div className={`${stylesMobile.tabela7} ${stylesDesktop.tabela7}`} style={{ display: etapa6 ? 'block' : 'none' }}>
                                <h1>Categoria B</h1>
                                <table id="tabelaNaoEditavel7" className={`${stylesMobile.tabela1} ${stylesDesktop.tabela1}`}>


                                </table>
                            </div>
                        </div>
                        <div className={`${stylesMobile.drop18} ${stylesDesktop.drop18}`} onClick={() => { setEtapa5(!etapa5) }}>
                            <h1>Etapa 5 <p>A definir</p>
                            </h1>
                            <div className={`${stylesMobile.tabela_5} ${stylesDesktop.tabela_5}`} style={{ display: etapa5 ? 'block' : 'none' }}>
                                <h1>Categoria A</h1>
                                <table id="tabelaNaoEditavele5" className={`${stylesMobile.tabelae5} ${stylesDesktop.tabelae5}`}>

                                </table>
                            </div>

                            <div className={`${stylesMobile.tabela6} ${stylesDesktop.tabela6}`} style={{ display: etapa5 ? 'block' : 'none' }}>
                                <h1>Categoria B</h1>
                                <table id="tabelaNaoEditavel6" className={`${stylesMobile.tabela1} ${stylesDesktop.tabela1}`}>


                                </table>
                            </div>
                        </div>
                        <div className={`${stylesMobile.drop18} ${stylesDesktop.drop18}`} onClick={() => { setEtapa4(!etapa4) }}>
                            <h1>Etapa 4 <p>A definir</p>
                            </h1>
                            <div className={`${stylesMobile.tabela_4} ${stylesDesktop.tabela_4}`} style={{ display: etapa4 ? 'block' : 'none' }}>
                                <h1>Categoria A</h1>
                                <table id="tabelaNaoEditavele4" className={`${stylesMobile.tabelae4} ${stylesDesktop.tabelae4}`}>

                                </table>
                            </div>
                            <div className={`${stylesMobile.tabela5} ${stylesDesktop.tabela5}`} style={{ display: etapa4 ? 'block' : 'none' }}>
                                <h1>Categoria B</h1>
                                <table id="tabelaNaoEditavel5" className={`${stylesMobile.tabela1} ${stylesDesktop.tabela1}`}>


                                </table>
                            </div>


                        </div>
                        <div className={`${stylesMobile.drop18} ${stylesDesktop.drop18}`} onClick={() => { setEtapa3(!etapa3) }}>
                            <h1>Etapa 3 <p>A definir</p>
                            </h1>
                            <div className={`${stylesMobile.tabela_3} ${stylesDesktop.tabela_3}`} style={{ display: etapa3 ? 'block' : 'none' }}>
                                <h1>Categoria A</h1>
                                <table id="tabelaNaoEditavele3" className={`${stylesMobile.tabelae3} ${stylesDesktop.tabelae3}`}>

                                </table>

                            </div>
                            <div className={`${stylesMobile.tabela4} ${stylesDesktop.tabela4}`} style={{ display: etapa3 ? 'block' : 'none' }}>
                                <h1>Categoria B</h1>
                                <table id="tabelaNaoEditavel4" className={`${stylesMobile.tabela1} ${stylesDesktop.tabela1}`}>


                                </table>
                            </div>
                        </div>
                        <div className={`${stylesMobile.drop18} ${stylesDesktop.drop18}`} onClick={() => { setEtapa2(!etapa2) }}>
                            <h1>Etapa 2 <p>Rio das Ostras</p>
                            </h1>
                            <div className={`${stylesMobile.tabela_2} ${stylesDesktop.tabela_2}`} style={{ display: etapa2 ? 'block' : 'none' }}>
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
                            <div className={`${stylesMobile.tabela3} ${stylesDesktop.tabela3}`} style={{ display: etapa2 ? 'block' : 'none' }}>
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

                        <div className={`${stylesMobile.drop18} ${stylesDesktop.drop18}`} onClick={() => { setEtapa1(!etapa1) }}>
                            <h1>Etapa 1 <p>Cabo Frio</p>
                            </h1>


                            <div className={`${stylesMobile.tabela_7} ${stylesDesktop.tabela_7}`} style={{ display: etapa1 ? 'block' : 'none' }}>
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

                            <div className={`${stylesMobile.tabela8} ${stylesDesktop.tabela8}`} style={{ display: etapa1 ? 'block' : 'none' }}>
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