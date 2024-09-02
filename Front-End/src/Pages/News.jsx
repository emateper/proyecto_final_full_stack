// src/components/News.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/News.css'; 

const News = () => {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (selectedNews) {
      setTitle(selectedNews.titulo);
      setSubtitle(selectedNews.subtitulo);
      setBody(selectedNews.cuerpo);
    } else {
      setTitle('');
      setSubtitle('');
      setBody('');
    }
  }, [selectedNews]);

  const fetchNews = async () => {
    try {
      const result = await axios.get('http://localhost:5000/News');
      setNews(result.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedNews) {
      // Update existing news
      await axios.put(`http://localhost:5000/News/${selectedNews.id}`, {
        titulo: title,
        subtitulo: subtitle,
        cuerpo: body
      });
    } else {
      // Create new news
      await axios.post('http://localhost:5000/News', {
        titulo: title,
        subtitulo: subtitle,
        cuerpo: body
      });
    }
    setTitle('');
    setSubtitle('');
    setBody('');
    setSelectedNews(null);
    fetchNews();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/News/${id}`);
      fetchNews();
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  return (
    <div>
      <h1>Novedades CRUD</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Subtítulo:</label>
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div>
        <div>
          <label>Cuerpo:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">{selectedNews ? 'Actualizar' : 'Crear'}</button>
      </form>

      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <h2>{item.titulo}</h2>
            <p>{item.subtitulo}</p>
            <p>{item.cuerpo}</p>
            <button onClick={() => setSelectedNews(item)}>Editar</button>
            <button onClick={() => handleDelete(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
