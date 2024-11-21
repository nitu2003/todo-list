import React from 'react';

function TodoItem({item,index,toggleItemDone,deleteItem,moveItemUp,isSelected,onClick,moveItemDown}){

  
    return(
      
        <li
        onClick={() => toggleItemDone(index)}
        className={item.isDone ? 'done' : ''}
      >
        {item.text}

        <button onClick={()=>moveItemUp(index)} disabled ={index===0}>Up</button>

        <button onClick={()=>moveItemDown(index)} disabled ={index===item.length -1}>Down</button>

        <button onClick={()=>deleteItem(index)} className='delete-button'>Delete</button>

      </li>

    );
    
}

export default TodoItem;