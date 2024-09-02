import "../components/styles/Footer.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
    <div className="container">  
        <footer className="footer">
            <h3>Aqui Abajo te dejo nuestras redes sociales para mas información</h3>
            <div className="icons">
                <FontAwesomeIcon className="icon" icon={faFacebook}  />
                <FontAwesomeIcon className="icon" icon={faInstagram} />
                <FontAwesomeIcon className="icon" icon={faTwitter} />
            </div>
        </footer>
    </div>  
    )
}

export default Footer;