import axios from "axios";
const initialState = {
  todoLists: [],
  currentName: "",
};
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_STARTED":
      console.log("GET_DATA_STARTED");
      return state
    case "GET_DATA_SUCCESS":
      console.log("GET_DATA_SUCCESS");
      return {
        ...state,
        todoLists: action.data,
      };
    case "ADD_TODO_STARTED":
      console.log("ADD_TODO_STARTED");
      return {
        ...state,
      };
    case "ADD_TODO_SUCCESS":
      console.log(state.todoLists);
      return {
        ...state,
        todoLists: [...state.todoLists, action.data],
      };
    case 'DELETE_TODO_STARTED':
      console.log('DELETE_TODO_STARTED')
      return {
        ...state
      }
    case 'DELETE_TODO_SUCCESS':
      console.log('DELETE_TODO_SUCCESS')
      return {
        ...state,
        todoLists : state.todoLists.filter(todo => todo.id !== action.data.id)
      }
    case 'EDIT_TODO_STARTED':
      return {
        ...state
      }
    case 'EDIT_TODO_SUCCESS':
      return {
        ...state,
        currentName : action.data.name
      }

    default:
      return state;
  }
};
export default reducers;
