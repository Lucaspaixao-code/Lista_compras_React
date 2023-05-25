import React, { useState } from 'react';

const InputForm = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleItemQuantityChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) { 
      setItemQuantity(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (itemName.trim() === '') {
      return;
    }

    const newItem = {
      id: Date.now(),
      name: itemName,
      quantity: itemQuantity,
      isBought: false,
    };

    onAddItem(newItem);

    setItemName('');
    setItemQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do item"
        value={itemName}
        onChange={handleItemNameChange}
      />
      <input
        type="text"
        placeholder="Quantidade"
        value={itemQuantity}
        onChange={handleItemQuantityChange}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default InputForm;