import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo,editTodo } from "../action";
class Item extends Component {
  render() {
    const { id, name } = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>
          <button onClick = {() => this.props.editTodo(id,name)} className="btn btn-success mr-2">
            <i className="fa fa-edit"></i>
          </button>
          <button
            onClick={() => this.props.deleteTodo(id)}
            className="btn btn-danger"
          >
            <i className="fa fa-close"></i>
          </button>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    editTodo : (id,value) => dispatch(editTodo(id,value))
  };
};

export default connect(null, mapDispatchToProps)(Item);
