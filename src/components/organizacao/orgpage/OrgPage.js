import stylesMobile from './OrgPage.mobile.module.css'
import stylesDesktop from './OrgPage.desktop.module.css'
import Header from '../../Header/Header'
import HeaderBottom from '../../Header/HeaderBottom'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, setDoc, getDoc, doc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ChavNaoEditavelA from '../../Chaves do admin/A/ChavNaoEditavelA';

function OrgPage() {


    return (

        <div>
            <Header />
            <ChavNaoEditavelA />
            <HeaderBottom />
        </div>
    )
}
export default OrgPage