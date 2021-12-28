// import TestMocking from './components/TestMocking';
// import Counter from './features/counter/Counter';
// import MobxExample from './components/MobxExample';
// import TodoList from './components/TodoList';
// import { observableTodoStore } from './app/ObservableTodoStore';
// import FontButton from './components/RecoilExample/FontButton';
// import Text from './components/RecoilExample/Text';
// import CharacterCounter from './components/RecoilExample/CharacterCounter';
// import TodoList from './components/RecoilExample/Todo/TodoList';
import { RecoilRoot } from 'recoil';
import './App.css';
import CurrentUserInfo from './components/RecoilExample/CurrentUserInfo';

function App() {
  return (
    <div className="App">
      {/* <TestMocking /> */}
      {/* <Counter /> */}
      {/* <MobxExample /> */}
      {/* <TodoList store={observableTodoStore} /> */}
      <RecoilRoot>
        {/* <FontButton /> */}
        {/* <Text /> */}
        {/* <CharacterCounter /> */}
        {/* <TodoList /> */}
        <CurrentUserInfo />
      </RecoilRoot>
    </div>
  );
}

export default App;
