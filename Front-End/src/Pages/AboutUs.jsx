import React from "react";
import './styles/AboutUs.css'

const AboutUs = (props) => {
    return (
    <section className="about-us">
      <div className="container">
        <h1 className="about-us-title">Sobre Nosotros</h1>
        <p className="about-us-text">
          En <strong>Black Net</strong>, nos enorgullece ofrecer soluciones digitales innovadoras que ayudan a nuestros clientes a destacar en el mundo en línea. Nuestro equipo está compuesto por desarrolladores talentosos y apasionados que trabajan incansablemente para transformar tus ideas en realidad.
        </p>
        <p className="about-us-text">
          Nos especializamos en una amplia gama de servicios, desde el desarrollo de sitios web corporativos hasta aplicaciones web avanzadas. Cada proyecto es único y lo abordamos con un enfoque personalizado para asegurar que se ajuste perfectamente a tus necesidades y objetivos.
        </p>
      </div>
    </section>
    );
}

export default AboutUs;