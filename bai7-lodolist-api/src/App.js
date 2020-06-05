import React from "react";
import FormTodo from "./component/form_todo";
import List from "./component/list";
import "../src/style.css";
import axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoLists: [],
      inputValue: "",
      currentName: "",
      todoSearch: "",
      idUpdate: "",
      loader: true
    };
  }
  componentDidUpdate(){
    if(this.state.loader ){
      this.setState({
        loader: true
      }, () => {
        console.log(this.state.loader)
      })
    }
  }
  componentDidMount() {
    axios
      .get("https://5ec912d99ccbaf0016aa8b6f.mockapi.io/todoLists")
      .then((res) => {
        this.setState({
          loader: false,
          todoLists: res.data
        });
      });
  }
  
  handleAdd = (inputText, id) => {
    console.log('hello')
    const { todoLists, currentName } = this.state;
    console.log(id);
    if (currentName.trim() !== "") {
      axios
        .put(`https://5ec912d99ccbaf0016aa8b6f.mockapi.io/todoLists/${id}`, {
          name: inputText.current.value,
        })
        .then(() => {
          this.setState({
            loader : false,
            todoLists: todoLists.map((todo) => {
              if (todo.name === currentName) {
                return { ...todo, name: inputText.current.value };
              } else return { ...todo };
            }),
            idUpdate: "",
          });
        });
    } else {
      const newTodo = {
        id: todoLists.length + 1,
        name: inputText.current.value,
      };
      axios
        .post("https://5ec912d99ccbaf0016aa8b6f.mockapi.io/todoLists", newTodo)
        .then((res) => {
          this.setState({
            loader : false,
            todoLists: [...todoLists, res.data],
            currentName: "",
            idUpdate: "",
          });
        });
    }
  };
  handleDelete = (id) => {
    const { todoLists } = this.state;
    axios
      .delete(`https://5ec912d99ccbaf0016aa8b6f.mockapi.io/todoLists/${id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          todoLists: todoLists.filter((todo) => todo.id !== id),
        });
      });
  };
  handleEdit = (inputText, id) => {
    this.setState({
      inputValue: inputText,
      currentName: inputText,
      idUpdate: id,
    });
  };
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  handleSearch = (inputText) => {
    axios
      .get("https://5ec912d99ccbaf0016aa8b6f.mockapi.io/todoLists")
      .then((res) => {
        this.setState({
          todoSearch: res.data.filter((todo) =>
            todo.name
              .toLowerCase()
              .includes(inputText.current.value.toLowerCase())
          ),
        });
      });
  };
 
  render() {
    const { todoLists, inputValue, todoSearch, idUpdate } = this.state;
    return (
      <div className="App">
        <FormTodo
          handleAdd={this.handleAdd}
          inputValue={inputValue}
          idUpdate={idUpdate}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
        />
        <List
          todoLists={todoLists}
          todoSearch={todoSearch}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
        {this.state.loader  && <div class="loader"></div>}
      </div>
    );
  }
}

export default App;
