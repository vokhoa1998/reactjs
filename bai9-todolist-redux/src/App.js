import React from "react";
import FormTodo from "./component/form_todo";
import List from "./component/list";
import "../src/style.css";
import axios from "axios";
class App extends React.Component {
   constructor(){
     super()
   }
  render() {
    return <div className="App">
      <FormTodo />
      <List />
    </div>;
  }
}

export default App;
