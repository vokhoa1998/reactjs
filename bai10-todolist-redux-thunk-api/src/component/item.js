import React, { Component } from "react";
import { deleteTodo,editTodo } from "../action";
import { connect } from "react-redux";
class Item extends Component {
  state = {};
  render() {
    const { id, name } = this.props;
    return (
      <tr>
        <th>{id}</th>
        <td>{name}</td>
        <td>
          <button
            onClick={() => this.props.deleteTodo(id)}
            type="button"
            class="btn btn-danger mr-2"
          >
            <i class="fa fa-window-close"></i>
          </button>
          <button
          onClick = {() => this.props.editTodo(name,id)}
           type="button" class="btn btn-success">
            <i class="fa fa-edit"></i>
          </button>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    editTodo : (name,id) => dispatch(editTodo(name, id))
  };
};
export default connect(null, mapDispatchToProps)(Item);
