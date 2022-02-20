import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
  const {
    editModal,
    addTodo,
    setOpenModal,
    newTodoValue,
    setNewTodoValue,
    editName,
    setEditModal,
    
  } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
    setEditModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    setEditModal(false);
  };
  const saveTodo = (event) => {
    event.preventDefault(); 
    
    editName(newTodoValue);
    setOpenModal(false);
    setEditModal(false);
  } 

  return (
    <form onSubmit={editModal ?  saveTodo : onSubmit}>
      <label>
        {editModal ? "Modifica tu tarea" : "Escribe tu nueva Tarea"}
      </label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder={editModal ? "Renombra tu tarea" : "Escribe aquí tu nueva tarea"}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          {editModal ? "Confirmar" : "Añadir"}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
