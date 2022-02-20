import React from 'react';
import '../EmptyTodos/ModalInicio.css';
function TodosError() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">Ocurrio un Error vuelve a Intentarlo...</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
}

export { TodosError };
