import './App.css';
/* import TodoForm from './components/TodoForm'; */
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <TodoList /> {/* import the component like in vuejs */}
    </div>
  );
}

export default App;
