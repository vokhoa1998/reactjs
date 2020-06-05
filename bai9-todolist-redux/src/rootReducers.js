const initialState = {
  todos: [
    { id: 1, name: "Khoa" },
    { id: 2, name: "Khoai" },
    { id: 3, name: "Kha" },
  ],
  currentName: "",
  value: "",
  newTodo: "",
};

const TodoList = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (state.currentName === "") {
        const todo = { id: state.todos.length + 1, name: action.text };
        return {
          ...state,
          todos: [...state.todos, todo],
        };
      } else {
        console.log("hello");
        return {
          ...state,
          todos: state.todos.map((todo) => {
            if (todo.name === state.currentName) {
              return { ...todo, name: state.value };
            } else return { ...todo };
          }),
          currentName: "",
        };
      }
    case "DELETE_TODO":
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.idDelete)],
      };
    case "EDIT_TODO":
      return {
        ...state,
        value: action.value,
        currentName: action.value,
      };
    case "CHANGE_TOTO":
      console.log("hello");
      return {
        ...state,
        value: action.target,
      };
    case "SEARCH_TODO":
      console.log(state.todos);
      return {
        ...state,
        newTodo: [
          ...state.todos.filter((todo) =>
            todo.name.toLowerCase().includes(action.nameSearch.toLowerCase())
          ),
        ],
      };
    default:
      return state;
  }
};
export default TodoList;
