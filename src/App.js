// import TestMocking from './components/TestMocking';
// import Counter from './features/counter/Counter';
// import MobxExample from './components/MobxExample';
import TodoList from './components/TodoList';
import { observableTodoStore } from './app/ObservableTodoStore';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <TestMocking /> */}
      {/* <Counter /> */}
      {/* <MobxExample /> */}
      <TodoList store={observableTodoStore} />
    </div>
  );
}

export default App;
