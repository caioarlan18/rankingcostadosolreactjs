import stylesMobile from './ChavEditavelA.mobile.module.css'
import stylesDesktop from './ChavEditavelA.desktop.module.css'
import Header from '../../Header/Header'
import HeaderBottom from '../../Header/HeaderBottom'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, setDoc, getDoc, doc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import firebaseConfig from '../../config/firebaseConfig';
import { useEffect, useState } from 'react';

function ChavNaoEditavelA() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    async function salvar24(event) {
        event.preventDefault()
        let chave1 = []
        let chavEditavel = document.getElementById('chavEditavel');
        let isFirst = true
        for (let row18 of chavEditavel.rows) {
            if (!isFirst) {
                let obj = {
                    chave: row18.cells[0].innerText,
                    value: row18.cells[1].innerHTML
                }
                chave1.push(obj)
            }
            isFirst = false
        }
        const collectionRef = doc(db, 'teste', 'chave1');
        const data = { chave1: chave1 };

        try {
            await setDoc(collectionRef, data);
            console.log('Documento salvo com sucesso!');
        } catch (error) {
            console.error('Erro ao adicionar o documento:', error);
        }
        alert('Salvo com sucesso')


        const docSnapchave1 = await getDoc(doc(db, "teste", "chave1"));
        if (!docSnapchave1.exists) {
            console.log('No such document!');
        } else {
            console.log('Document data:', docSnapchave1.data());
            let tableValue = docSnapchave1.data().chave1
            tableValue.forEach((row18) => {

                let chavNaoEditavel = document.getElementById('chavNaoEditavel');
                let newRow = document.createElement('tr');
                let firstCell = document.createElement('td');
                let firstText = document.createTextNode(row18.chave);
                firstCell.appendChild(firstText);

                let secondCell = document.createElement('td');
                secondCell.innerHTML = row18.value;
                newRow.appendChild(firstCell);
                newRow.appendChild(secondCell);
                chavNaoEditavel.appendChild(newRow);


                let chavEditavel = document.getElementById('chavEditavel');
                let newRow1 = document.createElement('tr');
                let firstCell1 = document.createElement('td');
                let firstText1 = document.createTextNode(row18.chave);
                firstCell1.appendChild(firstText1);

                let secondCell1 = document.createElement('td');
                secondCell1.innerHTML = row18.value;
                secondCell1.contentEditable = true
                newRow1.appendChild(firstCell1);
                newRow1.appendChild(secondCell1);
                chavEditavel.appendChild(newRow1);

            })
        }
    }

    var jogadores = [];

    function adicionarJogador() {
        var jogadorInput = document.getElementById("jogador");
        var jogador = jogadorInput.value.trim();
        if (jogador !== "") {
            jogadores.push(jogador);
            jogadorInput.value = "";
            renderizarJogadores();
            jogadorInput.focus()
        } else {
            alert('Preencha o campo')
        }

    }
    function renderizarJogadores() {
        var jogadoresList = document.getElementById("jogadores");
        jogadoresList.innerHTML = "";

        jogadores.forEach(function (jogador, i) {
            var jogadorItem = document.createElement("li");
            jogadorItem.classList.add(stylesMobile.listyle);
            jogadorItem.setAttribute("id", "jogador-" + (i + 1));

            var jogadorNome = document.createElement("span");
            jogadorNome.innerHTML = jogador;

            var removerBotao = document.createElement("button");
            removerBotao.classList.add(stylesMobile.removebtn);
            removerBotao.addEventListener("click", function () {
                removerJogador(i + 1);
            });
            removerBotao.innerHTML = "Remover";

            jogadorItem.appendChild(jogadorNome);
            jogadorItem.appendChild(removerBotao);
            jogadoresList.appendChild(jogadorItem);
        });
    }


    function removerJogador(id) {
        jogadores.splice(id - 1, 1);
        renderizarJogadores();
    }

    function criarTabela() {
        var jogadores_por_chave = document.getElementById("jogadores_por_chave").value;
        var num_jogadores = jogadores.length;
        var num_chaves = Math.ceil(num_jogadores / jogadores_por_chave);

        // Randomiza a lista de jogadores

        jogadores.sort(function () { return Math.random() - 0.5; });
        var tabela = document.getElementById("chavEditavel");
        var jogadoresList = document.getElementById("jogadores");
        jogadoresList.innerHTML = "";

        if (jogadores_por_chave !== '') {
            for (var i = 0; i < num_jogadores; i++) {
                var jogador = document.createElement("li");
                jogador.classList.add('listyle')
                jogador.setAttribute("id", "jogador-" + (i + 1));
                var jogadorNome = document.createElement("span");
                jogadorNome.innerHTML = jogadores[i];
                var removerBotao = document.createElement("button");
                removerBotao.classList.add('removebtn')
                removerBotao.setAttribute("onclick", "removerJogador(" + (i + 1) + ")");
                removerBotao.innerHTML = "Remover";
                jogador.appendChild(jogadorNome);
                jogador.appendChild(removerBotao);
                jogadoresList.appendChild(jogador);
            }

            for (var i = 0; i < num_chaves; i++) {
                var row = tabela.insertRow();
                var cell = row.insertCell(0);
                cell.innerHTML = "Chave " + (i + 1);
                var cell = row.insertCell(1);
                cell.contentEditable = true
                var jogadoresChave = jogadores.slice(i * jogadores_por_chave, (i + 1) * jogadores_por_chave);
                var jogadoresChaveHTML = '';
                for (var j = 0; j < jogadoresChave.length; j++) {
                    jogadoresChaveHTML += (i * jogadores_por_chave + j + 1) + ". " + jogadoresChave[j] + '<br> <br> <br>';

                }
                cell.innerHTML = jogadoresChaveHTML;

            }



        } else if (jogadores_por_chave === '') {
            alert("O campo está em branco")
        } else {
            alert('erro')
        }



    }
    function removerTodosJogadores() {
        var tabela = document.getElementById("chavEditavel");

        var num_chaves = tabela.rows.length - 1; // subtrai 1 para ignorar a linha do cabeçalho

        for (var i = num_chaves; i >= 1; i--) {
            tabela.deleteRow(i);

        }
    }


    return (
        <div>
            <Header orient={'Painel'} />
            <section className={`${stylesMobile.orgpage} ${stylesDesktop.orgpage}`}>
                <Link to='/preadmin'>
                    <div className={`${stylesMobile.orgpage_1} ${stylesDesktop.orgpage_1}`}>
                        <button className={`${stylesMobile.voltar} ${stylesDesktop.voltar}`} >Voltar</button>
                    </div>
                </Link>
                <div className={`${stylesMobile.orgpage_1} ${stylesDesktop.orgpage_1}`}>

                    <h2>Editar chaves do torneio - Categoria A</h2>



                    <div className={`${stylesMobile.cmode} ${stylesDesktop.cmode}`}>

                        <form className={`${stylesMobile.formone} ${stylesDesktop.formone}`}>
                            <div className={`${stylesMobile.fm} ${stylesDesktop.fm}`}>
                                <p className={`${stylesMobile.centfn} ${stylesDesktop.centfn}`}>
                                    <label for="jogador" className={`${stylesMobile.addtxt} ${stylesDesktop.addtxt}`}>Adicionar jogador:</label>
                                    <input type="text" id="jogador" name="jogador" />
                                    <button type="button" onClick={adicionarJogador} className={`${stylesMobile.addbtn} ${stylesDesktop.addbtn}`}>Adicionar</button>
                                </p>
                            </div>
                            <div className={`${stylesMobile.fm1} ${stylesDesktop.fm1}`}>

                                <label for="jogadores_por_chave" className={`${stylesMobile.jtxt} ${stylesDesktop.jtxt}`}>Jogadores por chave:</label>
                                <input type="number" id="jogadores_por_chave" name="jogadores_por_chave" />

                            </div>
                        </form>

                        <form>
                            <ul id="jogadores"></ul>
                            <div className={`${stylesMobile.fm2} ${stylesDesktop.fm2}`}>
                                <button type="button" onClick={criarTabela} className={`${stylesMobile.ct} ${stylesDesktop.ct}`}>Criar Chaves</button>
                                <button className={`${stylesMobile.salvar3} ${stylesDesktop.salvar3}`} onClick={salvar24}>Salvar</button>
                                <button type="button" onClick={removerTodosJogadores} className={`${stylesMobile.rt} ${stylesDesktop.rt}`}>Remover chaves</button>
                            </div>

                        </form>


                    </div>

                    <table id="chavEditavel">
                        <tr>
                            <td className={`${stylesMobile.esp} ${stylesDesktop.esp}`}>1</td>
                            <td class={`${stylesMobile.esp} ${stylesDesktop.esp}`}>2</td>

                        </tr>
                    </table>
                </div>
            </section>
            <HeaderBottom />
        </div>
    )
}
export default ChavNaoEditavelA