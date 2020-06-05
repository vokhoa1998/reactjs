import React, { Component } from "react";
import Item from "./item";
import { getData } from "../action";
import { connect } from "react-redux";
class List extends Component {
  componentDidMount() {
    console.log('dismount')
    this.props.getData();
  }
  render() {
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.todos.map((todo, index) => (
              <Item key={index} {...todo} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('mapstate')
  return {
    todos: state.todoLists
  };
};
const mapDispatchToProps = (dispatch) => {
  console.log('mapdispacth')
  return {
    getData: (data) => dispatch(getData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
