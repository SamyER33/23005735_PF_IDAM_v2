
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import '../styles/TaskDetails.css';

const TaskDetails = () => {
  const { selectedTask, completeTask, removeTask, setAlert } = useContext(TaskContext);
  const navigate = useNavigate();

  if (!selectedTask) {
    navigate('/home');
    return null; // Si no hay tarea seleccionada, redirigimos a la lista
  }

  const handleCompleteTask = () => {
    completeTask(selectedTask);
    setAlert('success', 'La tarea fue marcada como completada.');
    navigate('/home'); // Regresamos a la lista de tareas
  };

  const handleRemoveTask = () => {
    removeTask(selectedTask);
    setAlert('success', 'La tarea fue eliminada.');
    navigate('/home'); // Regresamos a la lista de tareas
  };

  return (
    <div className="task-details-container">
      <h2>Detalles de la Tarea</h2>
      <p><strong>Título:</strong> {selectedTask.title}</p>
      <p><strong>Descripción:</strong> {selectedTask.description}</p>
      <p><strong>Tipo:</strong> {selectedTask.type}</p>
      <p>
        <strong>Estado:</strong>{' '}
        {selectedTask.completed ? 'Completado' : 'Pendiente'}
      </p>
      <button onClick={handleCompleteTask} disabled={selectedTask.completed}>
        Marcar como Completada
      </button>
      <button onClick={handleRemoveTask}>Eliminar Tarea</button>
      <button onClick={() => navigate('/home')}>Regresar</button>
    </div>
  );
};

export default TaskDetails;
