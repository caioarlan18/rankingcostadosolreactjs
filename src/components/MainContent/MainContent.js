import stylesMobile from './MainContent.mobile.module.css'
import stylesDesktop from './MainContent.desktop.module.css'
import MainImage from '../../images/foto-main.jpg'
import MainImage2 from '../../images/4262849.jpg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function MainContent() {
    return (
        <div>
            <main className={`${stylesMobile.mn} ${stylesDesktop.mn}`}>
                <div className={`${stylesMobile.mn1} ${stylesDesktop.mn1}`}>
                    <Link to='GeneralPoints'><img src={MainImage} alt="imagem principal do site" /></Link>
                </div>
                <div className={`${stylesMobile.mn2} ${stylesDesktop.mn2}`}>
                    <img src={MainImage2} alt="imagem principal do site" />
                </div>
            </main>
            <div className={`${stylesMobile.homecontent} ${stylesDesktop.homecontent}`}>
                <div className={`${stylesMobile.homecontent1} ${stylesDesktop.homecontent1}`}>
                    <h1>O que é o Ranking Costa do Sol?</h1>
                    <p>É com imenso prazer que discorro acerca do Ranking Costa do Sol, uma competição de tênis de mesa que
                        enaltece os talentos desportivos dos atletas da bela região litorânea denominada Costa do Sol.
                        <br /><br />
                        Em suma, o Ranking Costa do Sol é uma prestigiosa competição esportiva que reúne os mais habilidosos
                        praticantes do tênis de mesa, atuantes na região homônima. Este evento, que agrega valor à prática
                        esportiva em questão, é restrito somente aos atletas da mencionada localidade, sendo um torneio local de
                        grande importância.
                        <br /><br />
                        Este torneio é devidamente organizado e possui regras criteriosas, a fim de assegurar que o desempenho
                        dos jogadores seja avaliado com equidade e justiça. Além disso, o Ranking Costa do Sol proporciona aos
                        participantes a oportunidade de aprimorar suas habilidades técnicas e táticas, bem como de vivenciar uma
                        experiência única no que se refere ao convívio social com outros entusiastas deste esporte.
                        <br /><br />
                        Não obstante, a importância do Ranking Costa do Sol transcende a mera competição esportiva, haja vista
                        que o evento favorece o fortalecimento da identidade cultural local, promove a união dos adeptos do
                        tênis de mesa na região e fomenta o turismo desportivo, atraindo entusiastas de outras localidades.
                        <br /><br />
                        Em conclusão, o Ranking Costa do Sol representa, sem sombra de dúvidas, um verdadeiro marco na história
                        do tênis de mesa na região da Costa do Sol. Com suas regras estritas, organização exemplar e talentosos
                        jogadores, este evento é capaz de transformar a rotina de seus participantes, tornando-se uma verdadeira
                        celebração do esporte e da cultura local.
                    </p>
                </div>
                <div className={`${stylesMobile.homecontent2} ${stylesDesktop.homecontent2}`}>
                    <h1>Regulamento do Ranking <br />Costa do Sol 2023</h1>
                    <p>
                        1)Só pode participar da competição moradores sendo vetada a atletas que estão a passeio ou a
                        trabalho;<br /><br />
                        2)Serão realizadas 6 etapas até o início de novembro;<br /><br />
                        3)A competição terá duas categorias A e B onde os atletas da B podem jogar na A e atletas da A não podem
                        jogar a B ;<br /><br />
                        4)Cada etapa terá premiação para os 4 primeiros de cada categoria;<br /><br />
                        5)Pontuação por etapa (não acumulativa):
                        *Campeão 100 pontos
                        *Vice campeão 80 pontos *
                        *3o Lugar 55 pontos
                        *Chegou nas quartas 25 pontos;
                        *Chegou nas oitavas 15 pontos;
                        *Participação 5 pontos;<br /><br />
                        6)Caso a fase não seja realizada por conta de poucos inscritos a pontuação da respectiva fase não será
                        aplicada ;<br /><br />
                        7)No final do ano teremos uma confraternização onde os 8 melhores de cada categoria serão premiados
                        ;<br /><br />
                        8)A pontuação é separada por categoria;<br /><br />
                        9)Critérios para desempate :<br /><br />
                        A)Mais títulos
                        B)Mais vices
                        C)Mais 3o lugar
                        D)Mais quartas
                        E)Mais oitavas
                        F)Sets vencidos nas finais
                        G)Sets vencidos nas semis
                        H)Número de pontos nas finais
                        I)Número de pontos nas semis
                        J)Sorteio
                        10)Para a edição de 2023 teremos rebaixamento de 2 atletas da A para B e acesso de dois da B para A
                        ;<br /><br />
                        11)Participou de uma etapa automaticamente já entra na classificação geral ;<br /><br />
                        12)A segunda e 6a etapa terão peso 2 na pontuação;<br /><br />
                        13)Proibido o atleta jogar de camiseta regata, boné, de chinelo e camisa branca;<br /><br />
                        14)O lucro de cada etapa será guardado para comprar a premiação dos 16 melhores no final do ano
                        ;<br /><br />
                        15)As etapas serão realizadas com bolinhas DHS D40+;<br /><br />
                        16)Sugerimos que o atleta jogue as partidas com a camisa do seu respectivo clube ou município;<br /><br />
                        17)As datas das etapas poderão sofrer alterações por vários motivos;<br /><br />
                        18)As partidas nas chaves serão realizadas a princípio em melhor de 3 sets , eventualmente numa etapa
                        com poucos inscritos na chave poderá ser melhor de 5 sets ;<br /><br />
                        19)Saindo de chave os jogos serão realizados em melhor de 5 até a final;<br /><br />
                        20)Atletas do mesmo clube ,mesma cidade ou afinidade muito próxima terão que fazer o primeiro jogo na
                        chave, cabe aos atletas identificarem essa situação após o sorteio e imediatamente comunicar a mesa
                        organizadora ;<br /><br />
                        21)Atitudes anti desportivas será passível de punição de perda dos pontos e eliminação da etapa sem
                        direito a devolução do dinheiro da inscrição;<br /><br />
                        22)Um atleta jamais deverá comemorar os pontos olhando para seu adversário;<br /><br />
                        23)A princípio fica acordado o valor de 25.00 por inscrição podendo haver alteração no decorrer do ano;
                        24)As etapas serão realizadas aos domingos, feriados ou sábados;
                        25)Para melhor organização dos eventos pedimos que o pagamento das inscrições sejam realizados de forma
                        antecipada, mas fica também permitida a participação de atletas de "última hora" ;<br /><br />
                        26)Sobre o rebaixamento caso um atleta se mude da Costa do Sol a sua pontuação não será computada, porém
                        se ele voltar a morar na região no ano de 2024 a sua pontuação será mantida e consequentemente seu
                        rebaixamento efetivado .
                        Ou seja caso isso aconteça o penúltimo da tabela será rebaixado.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default MainContent