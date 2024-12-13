
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../screens/Home';
import AddTask from '../screens/AddTask';
import TaskDetails from '../screens/TaskDetails';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-task" element={<AddTask />} />
      <Route path="/task-details" element={<TaskDetails />} />
    </Routes>
  </Router>
);

export default AppRoutes;
