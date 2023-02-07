
import './App.css';
import CounterView from './Redux/Counter/CounterView';
import TodosView from './Redux/Todos/TodosView';

function App() {
  return (
    <div className="App">
      <h1>Counter App React Redux Tolkit</h1>
      <CounterView />
      <TodosView />
    </div>
  );
}

export default App;
