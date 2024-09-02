import "../components/styles/NavBar.css"
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <nav className="Nav">
            <ul className="list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Nosotros">Nosotros</Link></li>
                <li><Link to="/Novedades">Novedades</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
            </ul>
        </nav>
    )
};

export default NavBar;