import React from 'react';
import Todo from './Todo'

const List = ({ items, name, todoClick }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      {/* { items.map( item => <Todo key={item.id} id={item.id} name={item.name} complete={item.complete} />) } */}
      { items.map( item => <Todo key={item.id} {...item} todoClick={todoClick} /> )}
    </ul>
  </div>
);

export default List;