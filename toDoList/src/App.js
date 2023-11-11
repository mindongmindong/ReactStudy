import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit =(event)=>{
    event.preventDefault();
    if(todo === ""){
      return;
    }
    setTodos((currentArray)=>[...currentArray,todo]);
    setTodo("");
  }
  return (

    <div>
      <h1>My To Dos ({todos.length})</h1>
      <form onSubmit={onSubmit}> 
        <input
          value={todo}
          type="text"
          placeholder="toDo"
          onChange={onChange}
        />
        <button>Add to do</button>
      </form>
      <hr/>
      <ol>
        {todos.map((item,index)=>
        <li key={index}>{item}</li>
        )}
      </ol>
    </div>
  );
}

export default App;
