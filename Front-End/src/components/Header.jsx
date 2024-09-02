import "../components/styles/Header.css";
import reactLogo from "../img/reactLogo.png"

function Header() {
    return (<header className="header">
        <img src={reactLogo} alt="React Logo" />
        <h1>Black Net</h1>

    </header>)
}

export default Header;