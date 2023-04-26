import React from 'react';
import { useAppSelector } from '../../store/store';
import { Card } from '../../utils/type';
import AddNewTaskComponent from './AddNewTaskComponent';
import CardComponent from './CardComponent';

function MainPage() {
  const cardList = useAppSelector((state) => state.addCard);

  return (
    <div className="main-container">
      <AddNewTaskComponent></AddNewTaskComponent>
      <div className="card-list">
        {cardList?.length ? (
          cardList.map((product: Card) => <CardComponent key={product.id} item={product} />)
        ) : (
          <p>Not found card ...</p>
        )}
      </div>
    </div>
  );
}

export default MainPage;
