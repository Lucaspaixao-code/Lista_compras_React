import React, { useState } from 'react';
import './App.css';
import InputForm from './InputForm';
import ItemList from './ItemList';

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleToggleItem = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, isBought: !item.isBought } : item
    );
    setItems(updatedItems);
  };

  return (
    <div className="App">
      <h1>Lista de Compras</h1>
      <InputForm onAddItem={handleAddItem} />
      <ItemList items={items} onToggleItem={handleToggleItem} />
    </div>
  );
}

export default App;