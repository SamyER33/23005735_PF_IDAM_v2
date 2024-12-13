
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { TaskList } from '../components/TaskList';
import { Alert } from '../components/Alert';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const {
    tasks,
    showAlert,
    alertMessage,
    alertType,
    selectTask,
    selectedTask,
    removeTask,
    completeTask,
  } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleTaskClick = (task) => {
    selectTask(task);
    navigate('/task-details'); // Navegamos a la pantalla de detalles
  };

  const handleBackToStart = () => {
    navigate('/'); // Regresamos a la pantalla de inicio
  };

  return (
    <div className="home-container">
      <h1>To-Do List</h1>
      {showAlert && <Alert type={alertType} message={alertMessage} />}
      <TaskList tasks={tasks} onTaskClick={handleTaskClick} />
      <button onClick={() => navigate('/add-task')}>Agregar Tarea</button>
      <button onClick={handleBackToStart}>Volver a la pantalla de inicio</button>
    </div>
  );
};

export default Home;
