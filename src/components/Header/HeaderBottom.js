import stylesMobile from './HeaderBottom.mobile.module.css'
import stylesDesktop from './HeaderBottom.desktop.module.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function HeaderBottom() {
    return (
        <div className={`${stylesMobile.menudown} ${stylesDesktop.menudown}`}>
            <div className={`${stylesMobile.menudown1} ${stylesDesktop.menudown1}`}>
                <Link to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="47.651" viewBox="0 0 49.238 47.651"
                        className={`${stylesMobile.i1} ${stylesDesktop.i1}`}>
                        <g id="Grupo_247" data-name="Grupo 247" transform="translate(-186.588 -6230.388)">
                            <path id="Caminho_248" data-name="Caminho 248"
                                d="M194.155,6248.729V6275a2.289,2.289,0,0,0,2.289,2.289h29.525a2.289,2.289,0,0,0,2.289-2.289v-26.271"
                                fill="none" stroke="#aaaeac" stroke-width="2" />
                            <path id="Caminho_249" data-name="Caminho 249"
                                d="M218.491,6277.289V6259.2c0-.871-.438-1.576-.978-1.576H204.9c-.541,0-.979.705-.979,1.576v18.087"
                                fill="none" stroke="#aaaeac" stroke-width="2" />
                            <path id="Caminho_250" data-name="Caminho 250" d="M187.118,6255.428l23.98-23.979,24.2,24.2"
                                fill="none" stroke="#aaaeac" stroke-width="2" />
                        </g>
                    </svg>
                </Link>
                <span className={`${stylesMobile.dot1} ${stylesDesktop.dot1}`}></span>
            </div>
            <div class={`${stylesMobile.menudown1} ${stylesDesktop.menudown1}`}>
                <Link to='GeneralPoints'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="51.908" viewBox="0 0 56.54 51.908"
                        onclick="reg()" class={`${stylesMobile.i2} ${stylesDesktop.i2}`}>
                        <g id="Grupo_246" data-name="Grupo 246" transform="translate(-403.047 -6225.882)">
                            <g id="Grupo_245" data-name="Grupo 245">
                                <path id="Retângulo_61" data-name="Retângulo 61"
                                    d="M3.294,0H15.22a3.294,3.294,0,0,1,3.294,3.294V25.308a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3.294A3.294,3.294,0,0,1,3.294,0Z"
                                    transform="translate(403.547 6251.981)" fill="none" stroke="#aaaeac" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" />
                                <path id="Retângulo_62" data-name="Retângulo 62"
                                    d="M3.294,0H15.22a3.294,3.294,0,0,1,3.294,3.294V32.012a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3.294A3.294,3.294,0,0,1,3.294,0Z"
                                    transform="translate(422.061 6245.277)" fill="none" stroke="#aaaeac" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" />
                                <path id="Retângulo_63" data-name="Retângulo 63"
                                    d="M3.294,0H15.22a3.294,3.294,0,0,1,3.294,3.294V20.4a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3.294A3.294,3.294,0,0,1,3.294,0Z"
                                    transform="translate(440.574 6256.885)" fill="none" stroke="#aaaeac" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" />
                            </g>
                            <path id="Caminho_247" data-name="Caminho 247"
                                d="M431.318,6226.382l1.749,3.544,3.911.568-2.83,2.759.668,3.9-3.5-1.839-3.5,1.839.668-3.9-2.83-2.759,3.911-.568Z"
                                fill="none" stroke="#aaaeac" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                    </svg>
                </Link>
                <span className={`${stylesMobile.dot2} ${stylesDesktop.dot2}`}></span>
            </div>
            <div className={`${stylesMobile.menudown1} ${stylesDesktop.menudown1}`}>
                <Link to='org'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="41.673" viewBox="0 0 35.422 41.673" className={`${stylesMobile.i3} ${stylesDesktop.i3}`}
                        onclick="org()">
                        <g id="Grupo_248" data-name="Grupo 248" transform="translate(-630.036 -6237.147)">
                            <path id="Shape-13"
                                d="M647.747,6257.984a10.418,10.418,0,1,1,10.33-10.5v.087A10.387,10.387,0,0,1,647.747,6257.984Zm0-17.861a7.443,7.443,0,1,0,7.38,7.5v-.062A7.42,7.42,0,0,0,647.747,6240.123Z"
                                fill="#aaaeac" />
                            <path id="Shape-14"
                                d="M663.981,6278.821h-32.47a1.484,1.484,0,0,1-1.475-1.488,16.322,16.322,0,0,1,16.236-16.371h2.952a16.321,16.321,0,0,1,16.234,16.371A1.484,1.484,0,0,1,663.981,6278.821Zm-17.711-14.882a13.309,13.309,0,0,0-13.194,11.906h29.34a13.313,13.313,0,0,0-13.194-11.906Z"
                                fill="#aaaeac" />
                        </g>
                    </svg>
                </Link>
                <span className={`${stylesMobile.dot3} ${stylesDesktop.dot3}`}></span>
            </div>
        </div>
    )
}
export default HeaderBottom