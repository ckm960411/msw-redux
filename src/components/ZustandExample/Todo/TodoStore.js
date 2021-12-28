import create from "zustand";

export const useStore = create(
  (set, get) => ({
    // 투두리스트 목록 getter 와 setter
    todoListState: [],
    setTodoListState: (list) => set({ todoListState: list }),

    // 투두리스트 필터 getter 와 setter
    todoListFilterState: "Show All",
    setTodoListFilterState: (filter) => set({ todoListFilterState: filter }),

    // 필터된 투두리스트 getter
    filteredTodoListState: () => {
      const filter = get().todoListFilterState;
      const list = get().todoListState;

      switch (filter) {
        case "Show Completed":
          return list.filter((item) => item.isComplete);
        case "Show Uncompleted":
          return list.filter((item) => !item.isComplete);
        default:
          return list;
      }
    },

    // 투두리스트 통계stats getter
    todoListStatsState: () => {
      const todoList = get().todoListState;
      const totalNum = todoList.length;
      const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
      const totalUncompletedNum = totalNum - totalCompletedNum;
      const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

      return {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted,
      };
    },
  }
));