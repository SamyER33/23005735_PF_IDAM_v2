
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Inicio.css';

const Inicio = () => {
  const navigate = useNavigate();

  return (
    <div className="inicio-container">
      <h1>Bienvenida, Brenda Samara Escobar Avila</h1>
      <button onClick={() => navigate('/home')}>Ir a la lista de tareas</button>
    </div>
  );
};

export default Inicio;
