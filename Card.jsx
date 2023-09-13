import React from 'react';
import './Card.css';

const Card = ({ professor }) => {
  return (
    <div className="card">
      <img src={professor.foto} alt={professor.nome} />
      <h3>{professor.nome}</h3>
      <p>{professor.formacao}</p>
      <a href={professor.lattes} target="_blank" rel="noopener noreferrer">
        Currículo Lattes
      </a>
    </div>
  );
};

export default Card;
