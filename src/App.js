
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import Inicio from './screens/Inicio';
import Home from './screens/Home';
import AddTask from './screens/AddTask';
import TaskDetails from './screens/TaskDetails';

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/task-details" element={<TaskDetails />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;
