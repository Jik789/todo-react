import React, { useState } from 'react';
import { editTextCard, removeCard } from '../../store/features/сardSlice';
import { useAppDispatch } from '../../store/store';
import { CardProps } from '../../utils/type';

function CardComponent(props: CardProps) {
  const item = props.item;
  const dispatch = useAppDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [inputText, setInputText] = useState(item.text);
  const [idItem] = useState(item.id);

  const handleDeleteTask = () => {
    dispatch(removeCard(idItem));
  };

  const handleEditTask = () => {
    setIsEdit(true);
  };

  const handleSaveTask = () => {
    dispatch(
      editTextCard({
        id: item.id,
        text: inputText,
      })
    );
    setIsEdit(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div className="item-card">
      {isEdit ? (
        <input
          className="item-card-input"
          type="text"
          value={inputText}
          onChange={handleInputChange}
        ></input>
      ) : (
        <p className="item-card-text">{item.text}</p>
      )}
      <div className="item-card-buttons">
        {isEdit ? (
          <button className="button-two" onClick={handleSaveTask}>
            Сохранить
          </button>
        ) : (
          <button className="button-two" onClick={handleEditTask}>
            Редактировать
          </button>
        )}
        <button className="button-two" onClick={handleDeleteTask}>
          Удалить
        </button>
      </div>
    </div>
  );
}

export default CardComponent;
