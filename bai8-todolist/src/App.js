import React from "react";
import FormTodo from "./component/form_todo";
import List from "./component/list";
import "../src/style.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoLists: [
        { id: 1, name: "Khoa" },
        { id: 2, name: "Linh" },
        { id: 3, name: "Long" },
      ],
      inputValue: "",
      currentName: "",
      todoSearch: ''
    };
  }
  handleAdd = (inputText) => {
    const { todoLists, currentName } = this.state;
    if (currentName.trim() !== "") {
      this.setState({
        todoLists: todoLists.map((todo) => {
          if (todo.name === currentName) {
            return { ...todo, name: inputText.current.value };
          } else return { ...todo };
        }),
        currentName: "",
      });
    } else {
      const newTodo = {
        id: todoLists.length + 1,
        name: inputText.current.value,
      };
      this.setState({
        todoLists: [...todoLists, newTodo],
        currentName: "",
      });
    }
  };
  handleDelete = (id) => {
    const { todoLists } = this.state;
    this.setState({
      todoLists: todoLists.filter((todo) => todo.id !== id),
    });
  };
  handleEdit = (inputText) => {
    this.setState({
      inputValue: inputText,
      currentName: inputText,
    });
  };
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  handleSearch = (inputText) => {
    const { todoLists } = this.state;
    this.setState(
      {
        todoSearch: todoLists.filter(todo =>
          todo.name
            .toLowerCase()
            .includes(inputText.current.value.toLowerCase())
        ),
      }
    );
  };
  render() {
    const { todoLists, inputValue ,todoSearch} = this.state;
    return (
      <div className="App">
        <FormTodo
          handleAdd={this.handleAdd}
          inputValue={inputValue}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
        />
        <List
          todoLists={todoLists}
          todoSearch={todoSearch}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
