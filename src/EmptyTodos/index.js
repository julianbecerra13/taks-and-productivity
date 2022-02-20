import React from 'react';
import './ModalInicio.css';
function EmptyTodos() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">No Tienes Tareas por Completar <br/><br/> !CREA UNA NUEVA! </p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
}

export { EmptyTodos };
