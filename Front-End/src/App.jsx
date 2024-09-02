import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import News from './Pages/News';
import Contact from './Pages/Contact';


function App() {
  return <div className="App">
    <Header />
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='Nosotros' element={<AboutUs />} />
        <Route path='Novedades' element={<News />} />
        <Route path='Contacto' element={<Contact />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>;
}

export default App;
