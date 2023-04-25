import React from 'react';
import { Card } from '../../utils/type';
import AddNewTaskComponent from './AddNewTaskComponent';
import CardComponent from './CardComponent';

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

function MainPage() {
  return (
    <div className="main-container">
      <AddNewTaskComponent></AddNewTaskComponent>
      <div className="card-list">
        {data?.length ? (
          data.map((product: Card) => <CardComponent key={product.id} item={product} />)
        ) : (
          <p>Not found card ...</p>
        )}
      </div>
    </div>
  );
}

export default MainPage;
