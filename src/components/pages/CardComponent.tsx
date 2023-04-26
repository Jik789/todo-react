import React from 'react';
import { CardProps } from '../../utils/type';

function CardComponent(props: CardProps) {
  const item = props.item;

  return (
    <div className="item-card">
      <p className="item-card-text">{item.text}</p>
      <div className="item-card-buttons">
        <button className="button-two">Редактировать</button>
        <button className="button-two">Удалить</button>
      </div>
    </div>
  );
}

export default CardComponent;
