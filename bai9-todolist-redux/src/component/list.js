import React, { Component } from "react";
import Item from "./item";
import { connect } from "react-redux";

class List extends React.Component {
  render() {
    const dataShow =
      this.props.newTodo === ""
        ? this.props.todoLists.map((todo, index) => (
            <Item {...todo} key={index} />
          ))
        : this.props.newTodo.map((todo, index) => (
            <Item {...todo} key={index} />
          ));
    return (
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{dataShow}</tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todoLists: state.todos,
    newTodo: state.newTodo,
  };
};
export default connect(mapStateToProps, null)(List);
