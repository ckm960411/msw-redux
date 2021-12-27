// import TestMocking from './components/TestMocking';
// import Counter from './features/counter/Counter';
// import MobxExample from './components/MobxExample';
// import TodoList from './components/TodoList';
// import { observableTodoStore } from './app/ObservableTodoStore';
import { RecoilRoot } from 'recoil';
import FontButton from './components/RecoilExample/FontButton';
import Text from './components/RecoilExample/Text';
import './App.css';
import CharacterCounter from './components/RecoilExample/CharacterCounter';

function App() {
  return (
    <div className="App">
      {/* <TestMocking /> */}
      {/* <Counter /> */}
      {/* <MobxExample /> */}
      {/* <TodoList store={observableTodoStore} /> */}
      <RecoilRoot>
        <FontButton />
        <Text />
        <CharacterCounter />
      </RecoilRoot>
    </div>
  );
}

export default App;
