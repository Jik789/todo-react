import React, { useState } from 'react';
import { removeCard } from '../../store/features/сardSlice';
import { useAppDispatch } from '../../store/store';
import { CardProps } from '../../utils/type';

function CardComponent(props: CardProps) {
  const dispatch = useAppDispatch();
  const item = props.item;
  const [idItem] = useState(item.id);

  const handleDeleteTask = () => {
    dispatch(removeCard(idItem));
  };

  return (
    <div className="item-card">
      <p className="item-card-text">{item.text}</p>
      <div className="item-card-buttons">
        <button className="button-two">Редактировать</button>
        <button className="button-two" onClick={() => handleDeleteTask()}>
          Удалить
        </button>
      </div>
    </div>
  );
}

export default CardComponent;
