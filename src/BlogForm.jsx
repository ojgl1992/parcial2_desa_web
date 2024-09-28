// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const BlogForm = () => {
  const [data, setData] = useState({
    id: '',
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://api.vercel.app/blogLinks');
    const jsonData = await response.json();
    console.log(jsonData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID:</label>
        <input
          type="text"
          name="id"
          value={data.id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Título:</label>
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Autor:</label>
        <input
          type="text"
          name="author"
          value={data.author}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Consultar</button>
    </form>
  );
};

export default BlogForm;