
import React from 'react';
import '../styles/Alert.css';

export const Alert = ({ type, message }) => {
  const alertClass = `alert ${type}`;
  return <div className={alertClass}>{message}</div>;
};
