import Header from "./Header/Header"
import MainContent from "./MainContent/MainContent"
import HeaderBottom from "./Header/HeaderBottom"
function Home() {
    return (
        <div>
            <Header orient={'Home'} />
            <MainContent />
            <HeaderBottom />
        </div>
    )
}
export default Home