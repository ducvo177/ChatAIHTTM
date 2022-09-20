import { useStore, actions } from "./store";
function App() {
  const [state, dispatch] = useStore();
  const { todo, todoInput } = state;
  const handleAdd=()=>{
   dispatch(actions.addTodo(todoInput))
  }
  return (
    <div>
      <h1>Tên:</h1>
      <input
        type="text"
        value={todoInput}
        placeholder="Enter job..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      ></input>
      <button onClick={handleAdd}>Add</button>
      {todo.map((todoItem,index) =>(
        <li key={index}>{todoItem}</li>
      ))}
    </div>
  );
}

export default App;
