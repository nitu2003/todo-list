import React, { useState,useEffect } from 'react';
import TodoItem from './TodoItem'; // Assuming you have a TodoItem component

const TodoList = () => {
  // Example initial state for the items
  const [items, setItems] = useState([
    { text: 'Learn React', done: true },
    { text: 'Build a Todo App', done: false },
    { text: 'Profit!', done: false }
  ]);

  const [newItem, setNewItem] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const addItem = () => {
    if (newItem.trim() === '') return;
    setItems([...items, { text: newItem, isDone: false }]);
    setNewItem('');
  };
  // Function to toggle the done status of an item
  const toggleItemDone = (index) => {
    const newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  };

  const deleteItem = (index) => {
    if (index < 0) return;
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    setSelectedIndex(null);
  };

  // Calculate the total number of items
  const totalItems = items.length;

  // Calculate the number of completed items
  const completedItems = items.filter(item => item.done).length;

  const moveItemUp =(index)=>{
    if(index===0) return ;
    const updatedItems = [...items];
    [updatedItems[index-1],updatedItems[index]]=[updatedItems[index],updatedItems[index-1]];
    setItems(updatedItems);
  }

  const moveItemDown =(index)=>{
    if(index === items.length -1) return;
    const updatedItems = [...items];
    [updatedItems[index],updatedItems[index+1]] = [updatedItems[index+1],updatedItems[index]];
  }

  useEffect(() => {
    const handleKeyDown =(e)=>{
        if(e.key === 'Enter'){
            addItem();
        }else if(e.key === 'Delete'){
            if(selectedIndex !== null){
                deleteItem(selectedIndex)
            }else{
                deleteItem(items.length-1);
            }
        }else if(e.key ==='ArrowUp'){
            if(selectedIndex !== null){
                moveItemUp(selectedIndex)
            }
        }else if (e.key ==='arrowDown'){
            if(selectedIndex !== null){
                moveItemDown(selectedIndex)
            }
        }
    };

    document.addEventListener('keydown',handleKeyDown);  
    return () => {
        document.removeEventListener('keydown',handleKeyDown);  
    }
  }, [selectedIndex,newItem,items,addItem,deleteItem,moveItemUp,moveItemDown]);

  
  
  return (
    <div>
      <h1>Completed Items</h1>
      
      {/* Display the count of completed items and total items */}
      <p>
        Completed: {completedItems} / {totalItems}
      </p>

      {/* Render the list of TodoItems */}
      <input
      type='text'
      value={newItem}
      onChange={(e)=>e.key ==='Enter' && addItem()}
      />
      <ul>
        {items.map((item, index) => (
          <TodoItem 
            key={index} 
            item={item} 
            index={index} 
            isSelected ={index=== selectedIndex}
            onClick={()=>setSelectedIndex(index)}
            toggleItemDone={toggleItemDone} 
            moveItemUp ={moveItemUp}
            moveItemDown = {moveItemDown}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
