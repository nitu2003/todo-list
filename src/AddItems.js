// import React,{useState} from "react";

// function AddItems (){
//     const [items, setItems] = useState([]);
//     const [newItem, setNewItem] = useState('');


//     const addItem = ()=>{
//         if(newItem.trim()==='')return;
//         setItems([...items,newItem]);
//         setNewItem('')
//     }

//     return (
//         <div className ="container">
//           <h1>Todo List</h1>
//             <div className="input-container">
//                 <input
//                  type="text"
//                  value={newItem}
//                  onChange={(e)=>setNewItem(e.target.value)}
//                  placeholder="Add a new item..."
//                 />

//                 <button onClick={addItem}>Add</button>
//             </div>
//             <ul>
//                {items.map((item, index) => (
//                 <li key={index}>{item}</li>
//                ))}
//       </ul>

//         </div>
//     )
// }

// export default AddItems