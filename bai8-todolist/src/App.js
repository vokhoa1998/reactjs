import React from "react";
import { useState } from "react";
import FormTodo from "./component/form_todo";
import List from "./component/list";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  const [todoLists, setTodo] = useState([
    { id: 1, name: "Khoa" },
    { id: 2, name: "Linh" },
    { id: 3, name: "Long" },
  ]);
  const [currentName, getName] = useState("");
  const [valueInput, setValue] = useState("");
  const [newTodo, search] = useState("");
  const addTodo = (inputText) => {
    if (currentName !== "") {
      setTodo(
        todoLists.map((todo) => {
          if (todo.name === currentName) {
            return { ...todo, name: valueInput };
          } else return { ...todo };
        })
      );
      getName("");
    } else {
      setTodo([
        ...todoLists,
        { id: todoLists.length + 1, name: inputText.current.value },
      ]);
    }
  };
  const deleteTodo = (id) => {
    setTodo((newTodo) => {
      return [...newTodo.filter((todo) => todo.id !== id)];
    });
  };
  const editTodo = (id) => {
    let name = "";
    todoLists.map((todo) => {
      if (todo.id === id) name = todo.name;
    });
    getName(name);
    setValue(name);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const searchTodo = (nameSearch) => {
    search([
      ...todoLists.filter((todo) =>
        todo.name.toLowerCase().includes(nameSearch.toLowerCase())
      ),
    ]);
  };
  return (
    <>
      <ToastContainer />
      <FormTodo
        addTodo={addTodo}
        currentName={currentName}
        handleChange={handleChange}
        valueInput={valueInput}
        searchTodo={searchTodo}
      />
      <List
        todoLists={todoLists}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        newTodo={newTodo}
      />
    </>
  );
}
