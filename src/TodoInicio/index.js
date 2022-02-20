import React from 'react';
import './Inicio.css';

function TodoInicio({ children }) {
  return <div className="ModalBackground">
    {children}
  </div>
}

export { TodoInicio };
