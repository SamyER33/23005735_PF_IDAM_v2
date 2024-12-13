
import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const selectTask = (task) => {
    setSelectedTask(task);
  };

  const completeTask = (taskToUpdate, isCompleted ) => {
    setTasks(
      tasks.map((task) =>
        task === taskToUpdate ? { ...task, completed: true } : task
      )
    );
  };

  const removeTask = (task) => {
    const updatedTasks = tasks.filter((t) => t !== task);
    setTasks(updatedTasks);
    setSelectedTask(null); // Limpiar la tarea seleccionada
  };


  const setAlert = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, selectTask, selectedTask, showAlert, alertMessage, alertType, setAlert, completeTask, removeTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
