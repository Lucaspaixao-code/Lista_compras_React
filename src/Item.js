import React from 'react';

const Item = ({ item, onToggle }) => {
  const handleToggle = () => {
    onToggle(item.id);
  };

  return (
    <li>
      <span
        style={{ textDecoration: item.isBought ? 'line-through' : 'none' }}
        onClick={handleToggle}
      >
        {item.name} - Quantidade: {item.quantity}
      </span>
    </li>
  );
};

export default Item;