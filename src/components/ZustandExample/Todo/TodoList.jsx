import TodoItem from "./TodoItem";
import TodoListCreator from "./TodoListCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";
import { useStore } from "./TodoStore";

export default function TodoList() {
  const todoList = useStore(state => state.filteredTodoListState())
  
  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoListCreator />
      {todoList.map(item => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </div>
  );
}