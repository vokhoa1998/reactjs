import axios from "axios";
export const getData = () => {
  return (dispatch) => {
    dispatch(getDataStarted());
    axios
      .get("https://5ec912d99ccbaf0016aa8b6f.mockapi.io/todoLists")
      .then((res) => {
        dispatch(getDataSuccess(res.data));
      });
  };
};
export const addTodo = (data) => {
  let id = 0
  return (dispatch) => {
    dispatch(addTodoStarted());
    axios
      .post("https://5ec912d99ccbaf0016aa8b6f.mockapi.io/todoLists", {
        id: 0,
        name: data,
      })
      .then((res) => {
        dispatch(addTodoSuccess(res.data));
      });
  };
};
export const deleteTodo = (id) => {
  return dispatch => {
    dispatch(deleteTodoStarted());
    axios
    .delete(`https://5ec912d99ccbaf0016aa8b6f.mockapi.io/todoLists/${id}`)
    .then(res => {
      dispatch(deleteTodoSuccess(res.data))
    })
  }
}
export const editTodo = (value,id) => {
  return dispatch => {
    dispatch(editTodoStarted())
    axios
    .put(`https://5ec912d99ccbaf0016aa8b6f.mockapi.io/todoLists/${id}`,{id : id, name : value} )
  }
}
export const getDataStarted = () => {
  return {
    type: "GET_DATA_STARTED",
  };
};
export const getDataSuccess = (data) => {
  return {
    type: "GET_DATA_SUCCESS",
    data,
  };
};
export const addTodoStarted = () => {
  return {
    type: "ADD_TODO_STARTED",
  };
};
export const addTodoSuccess = (data) => {
  return {
    type: "ADD_TODO_SUCCESS",
    data,
  };
};
export const deleteTodoStarted = () => {
  return {
    type : "DELETE_TODO_STARTED"
  }
}
export const deleteTodoSuccess = (data) => {
  return {
    type : "DELETE_TODO_SUCCESS",
    data
  }
}
export const editTodoStarted = () => {
  return {
    type : "EDIT_TODO_STARTED"
  }
}
export const editTodoSuccess = (data) => {
  return {
    type : "EDIT_TODO_SUCCESS",
    data
  }
}
