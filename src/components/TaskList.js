
import React from 'react';
import '../styles/TaskList.css';

export const TaskList = ({ tasks, onTaskClick }) => {
  return (
    <table className="task-list">
      <thead>
        <tr>
          <th>Título</th>
          <th>Descripción</th>
          <th>Tipo</th>
          <th>Completada</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr
            key={index}
            className={task.completed ? 'completed-task' : ''}
            onClick={() => onTaskClick(task)}
          >
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.type}</td>
            <td>
              {task.completed ? (
                <span>&#x2714;</span> // Check estático
              ) : (
                ''
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
