// import React ,{useState} from 'react';
// import TodoItem from './TodoItem';

// function MarkList(){
//     const [items, setItems] = useState([])
//     const [newItem, setNewItem] = useState('');

//     const addItem =()=>{
//         if(newItem.trim()==='') return ;
//         setItems([...items,{text:newItem,isDone:false}]);
//         setNewItem('');
//     }

//     const toggleItemDone =(index) =>{
//         const updatedItems =[...items];
//         updatedItems[index].isDone=!updatedItems[index].isDone;
//         setItems(updatedItems);
//     }

//     return (
//         <div className="container">
//             <h1>TodoList</h1>
//             <div className='input-container'>
//             <input
//                type='text'
//                value={newItem}
//                onChange={(e)=>setNewItem(e.target.value)}
//                placeholder='Add new item...'
//              />
//              <button onClick={addItem}>Add</button>
//              </div>

//              <ul>
//         {items.map((item, index) => (
//           <li
//             key={index}
//             onClick={() => toggleItemDone(index)}
//             className={item.isDone ? 'done' : ''}
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>
//         </div>
        


//     )
// }

// export default MarkList