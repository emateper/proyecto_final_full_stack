import React from "react";
import Card from '../components/Card';
import '../Pages/styles/HomePage.css'

const HomePage = (props) => {
    return (
        <main className="holder">
            <h2 className="sub-title">Bienvenidos</h2>
            <p className="paragraph">Nos especializamos en transformar ideas en experiencias digitales excepcionales. Con un equipo de desarrolladores altamente capacitados y apasionados por la tecnología, ofrecemos soluciones web personalizadas que no solo cumplen con los estándares más altos de calidad, sino que también están diseñadas para impulsar el crecimiento y la innovación de nuestros clientes. Desde sitios web corporativos hasta aplicaciones web complejas, nuestro enfoque centrado en el cliente garantiza que cada proyecto sea único y adaptado a las necesidades específicas de cada negocio.</p>
            <img className="main-image" src="https://cdn.pixabay.com/photo/2021/10/11/17/36/technology-6701406_1280.jpg" alt="" />
            <div className="card-wrapper">
                <Card 
                    image="https://media.istockphoto.com/id/1305999733/es/foto/escritorio-de-dise%C3%B1o-web.jpg?s=2048x2048&w=is&k=20&c=LyKBqRwfFvBtXhyOLUTbcd3E1r_NaMYnMzmk3xiRqYw=" 
                    title="Desarrollo Web Personalizado" 
                    text="Creamos sitios web a medida que se adaptan perfectamente a las necesidades y objetivos de tu negocio. Nuestro equipo de expertos utiliza las últimas tecnologías para garantizar que tu presencia en línea sea moderna, funcional y atractiva"
                />
                <Card 
                    image="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg" 
                    title="Optimización SEO Avanzada" 
                    text="Mejora tu visibilidad en los motores de búsqueda con nuestras estrategias de SEO avanzadas. Nos aseguramos de que tu sitio web esté optimizado para atraer más tráfico orgánico y convertir visitantes en clientes."
                />
                <Card 
                    image="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg" 
                    title="Soluciones de Comercio Electrónico" 
                    text="Desarrollamos plataformas de comercio electrónico robustas y seguras que facilitan la venta de tus productos en línea. Desde la integración de pasarelas de pago hasta la gestión de inventarios, te ofrecemos todo lo que necesitas para tener éxito en el mundo digital."
                />
                <Card 
                    image="https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_1280.jpg" 
                    title="Mayor visibilidad" 
                    text="Con sitios web absolutamente personalizados y con aplicaciones para que tu negocio rinda mas y potencie tus ventas o servicios."
                />
            </div>
        </main>

    );
}

export default HomePage;