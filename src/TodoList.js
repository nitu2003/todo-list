import React ,{useState,useEffect} from 'react';
import TodoItem from './TodoItem';
import './TodoItem.css'

function TodoList(){
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [todos, setTodos] = useState([
        { id: 1, name: 'Buy groceries', dateAdded: new Date(2024, 7, 25), completed: false },
        { id: 2, name: 'Read a book', dateAdded: new Date(2024, 7, 22), completed: true },
        // more todos...
    ]);
    const addItem =()=>{
        if(newItem.trim()==='')return;
        setItems([...items,{text:newItem,isDone:false}]);
        setNewItem('');
    };

    const toggleItemDone =(index)=>{
        const updatedItems =[...items];
        updatedItems[index].isDone = !updatedItems[index].isDone;
        setItems(updatedItems);
    };

    const deleteItem = (index)=>{
        const updatedItems = items.filter((item,i)=>i !==index);
        setItems(updatedItems)

    };

    const totalItems = items.length;

    const completeditems = items.filter(item=>item.isDone).length;

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



      const sortTodos = (criterion) => {
        const sortedTodos = [...todos].sort((a, b) => {
            if (criterion === 'name') {
                return a.name.localeCompare(b.name);
            } else if (criterion === 'dateAdded') {
                return new Date(a.dateAdded) - new Date(b.dateAdded);
            } else if (criterion === 'completed') {
                return a.completed - b.completed;
            } else {
                return 0;
            }
        });
        setTodos(sortedTodos);
    };

    const handleSortChange = (e) => {
        sortTodos(e.target.value);
    };


    return (
        <div className='container'>
           <h1>My Todo List</h1>
           <select onChange={handleSortChange}>
                <option value="name">Sort by Name</option>
                <option value="dateAdded">Sort by Date Added</option>
                <option value="completed">Sort by Completed</option>
            </select>
           <div className='input-container'>
              <input
              type='text'
              value={newItem}
              onChange={(e)=>setNewItem(e.target.value)}
              placeholder='Add new item...'
              />
              <button onClick={addItem}>Add</button>
           </div>
           <p>
            Completed:{completeditems}/{totalItems}
           </p>
           <ul>
            {items.map((item,index)=>(
                <TodoItem
               key={index}
               index={index}
               item={item}
               toggleItemDone={toggleItemDone}
               deleteItem={deleteItem}
               moveItemUp={moveItemUp}
               moveItemDown={moveItemDown}
               isSelected={index === selectedIndex}
               onClick={() => setSelectedIndex(index)}
               />
               
            ))}
          </ul>
          <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span>{todo.name}</span>
                        <span>{todo.dateAdded.toLocaleDateString()}</span>
                        <span>{todo.completed ? 'Done' : 'Pending'}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
