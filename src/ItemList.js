import React from 'react';
import Item from './Item';

const ItemList = ({ items, onToggleItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} onToggle={onToggleItem} />
      ))}
    </ul>
  );
};

export default ItemList;