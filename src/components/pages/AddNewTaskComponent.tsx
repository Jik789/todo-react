import React, { useState } from 'react';
import { addCard } from '../../store/features/сardSlice';
import { useAppDispatch } from '../../store/store';

function AddNewTaskComponent() {
  const dispatch = useAppDispatch();
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleAddTask = () => {
    if (!inputText) return;
    dispatch(
      addCard({
        id: Math.trunc(Math.random() * 1e8),
        text: inputText,
      })
    );
  };

  return (
    <div className="add-task-container">
      <input
        type="text"
        className="input-text"
        placeholder="Введите текст задачи"
        onChange={handleInputChange}
      ></input>
      <button className="button-one" onClick={() => handleAddTask()}>
        Добавить задачу
      </button>
    </div>
  );
}

export default AddNewTaskComponent;
