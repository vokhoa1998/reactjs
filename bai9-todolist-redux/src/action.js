export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    text,
  };
};
export const deleteTodo = (idDelete) => {
  return {
    type: "DELETE_TODO",
    idDelete,
  };
};
export const editTodo = (idEdit, value) => {
  return {
    type: "EDIT_TODO",
    idEdit,
    value,
  };
};
export const changeTodo = (target) => {
  return {
    type: "CHANGE_TOTO",
    target,
  };
};
export const searchTodo = (nameSearch) => {
  return {
    type: "SEARCH_TODO",
    nameSearch
  };
};
