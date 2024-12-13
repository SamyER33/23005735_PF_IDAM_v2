
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import '../styles/AddTask.css';

const AddTask = () => {
  const { addTask, setAlert } = useContext(TaskContext); // Usamos el contexto
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de los campos
    if (!title || !description || !type) {
      setAlert('error', 'Todos los campos son obligatorios');
      return;
    }

    // Agregar la tarea
    addTask({ title, description, type });
    setAlert('success', 'Tarea agregada con éxito');
    navigate('/home'); // Redirigir a la lista de tareas
  };

  return (
    <div className="add-task-container">
      <h2>Agregar Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <label>Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Descripción</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Tipo</label>
        <input
          type="text"
          placeholder='Por ejemplo: Trabajo, Personal'
          value={type}
          onChange={(e) => setType(e.target.value)}
          />
        <button type="submit">Agregar</button>
        {/* Botón de cancelar */}
        <button type="button" onClick={() => navigate('/home')}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default AddTask;
