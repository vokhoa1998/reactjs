import React from "react";
import FormTodo from "./component/form_todo";
import List from "./component/list";
import "../src/style.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoLists: [],
      inputValue: "",
      currentName: "",
      todoSearch: "",
      idUpdate: "",
      loader: true,
    };
  }
  // componentDidUpdate(){
  //   console.log('ComponentDidupdate')
  //   console.log(this.state.loader)
  //   if(this.state.loader ===true){
  //     this.setState({
  //       loader: false
  //     })
  //   }
  // }
  notifySuccess = () =>
      toast.success("🦄Add Todo Success!", {
      position: "top-right",
      autoClose: 3000,
    });
    notifyDelete = () =>
    toast.error("🦄 Delete Todo Success!", {
    position: "top-right",
    autoClose: 3000,
  });
  componentDidMount() {
    axios
      .get("https://5ec912d99ccbaf0016aa8b6f.mockapi.io/todoLists")
      .then((res) => {
        this.setState({
          todoLists: res.data,
          loader: false,
        });
      });
  }

  handleAdd = (inputText, id) => {
    console.log("hello");
    const { todoLists, currentName } = this.state;
    if (currentName.trim() !== "") {
      axios
        .put(`https://5ec912d99ccbaf0016aa8b6f.mockapi.io/todoLists/${id}`, {
          name: inputText.current.value,
        })
        .then(() => {
          this.setState({
            todoLists: todoLists.map((todo) => {
              if (todo.name === currentName) {
                return { ...todo, name: inputText.current.value };
              } else return { ...todo };
            }),
            idUpdate: "",
          });
        }, this.notifySuccess());
    } else {
      const newTodo = {
        id: todoLists.length + 1,
        name: inputText.current.value,
      };
      axios
        .post("https://5ec912d99ccbaf0016aa8b6f.mockapi.io/todoLists", newTodo)
        .then((res) => {
          this.setState({
            loader: true,
            todoLists: [...todoLists, res.data],
            currentName: "",
            idUpdate: "",
          });
        }, this.notifySuccess());
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
      }, this.notifyDelete());
  };
  handleEdit = (inputText, id) => {
    this.setState({
      inputValue: inputText,
      currentName: inputText,
      idUpdate: id,
    });
  };
  //  this method excute event onChange from other func , it also make componentDidUpdate run when I input text
  // but you only care affection of it on method componentDidupdate
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
        <ToastContainer />
        {this.state.loader && <div class="loader"></div>}
      </div>
    );
  }
}

export default App;
