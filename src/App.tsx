
import './App.css'
import { ChangeEvent, useState } from 'react'

function TodoList() {
  const [listItems, setListItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleClick = () => {
    setListItems([...listItems, inputValue]);
    setInputValue('');
  }

  const deleteItem = (indexOfItemToDelete: number) => {
    setListItems(listItems.filter((item, index) => index !== indexOfItemToDelete));
  }

  return <div>
    <h2>Ajouter un élément</h2>
    <input style={{ marginRight: '20px' }} type="text" value={inputValue} onChange={handleInputValue} />
    <button onClick={handleClick}>Ajouter l'élément à la liste ❤️</button>
    <ul >
      {listItems.map((item, index) => (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }} key={index}>
          <li style={{ marginRight: '20px' }}>{item}</li>
          <button onClick={() => deleteItem(index)}>X</button></div>
      ))}
    </ul>

  </div>;
}

export default TodoList;


