import React, { Component } from "react";
import TodoForm from "./component/todo_form";
import List from "./component/list";
import "../src/style.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <TodoForm />
        <List />
      </>
    );
  }
}

export default App;
