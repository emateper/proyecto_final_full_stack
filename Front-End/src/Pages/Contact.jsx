import React, { useState } from 'react';
import './styles/Contact.css';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando....");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "82539395-3c88-4a38-af32-e8a82636e956");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setResult("Mensaje enviado con éxito!!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult(`Submission error: ${error.message}`);
    }
  };

  return (
    <section className='contact'>
      <form onSubmit={onSubmit}>
        <h2 className='title'>Escribenos!</h2>
        <div className='input-box'>
          <label htmlFor="name">Nombre</label>
          <input type="text" className='field' placeholder='Ingresa tu nombre' name='name' required/>
        </div>
        <div className='input-box'>
          <label htmlFor="email">Dirección de Email</label>
          <input type="email" className='field' placeholder='Ingresa tu email' name='email' required/>
        </div>
        <div className='input-box'>
          <label htmlFor="message">Ingrese su mensaje</label>
          <textarea name="message" className='field_mess' placeholder='Ingrese su mensaje' required></textarea>
          <button type='submit'>Enviar</button>
        </div>
        {result && <p className="result">{result}</p>}
      </form>
    </section>
  );
}

export default Contact;
