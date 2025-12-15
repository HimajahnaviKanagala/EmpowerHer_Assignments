import TodoList from "./TodoList";
import {useState} from 'react';
function App(){
  const [showTodos, setShowTodos]=useState(true);
  return (
    <div>
      {showTodos && <TodoList/>}
      <button onClick={()=>setShowTodos(false)}>Unmount Todos</button>
    </div>
  );
}
export default App;