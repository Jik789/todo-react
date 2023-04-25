import React from 'react';

function AddNewTaskComponent() {
  return (
    <div className="add-task-container">
      <input type="text" className="input-text" placeholder="Введите текст задачи"></input>
      <button className="button-one">Добавить задачу</button>
    </div>
  );
}

export default AddNewTaskComponent;
