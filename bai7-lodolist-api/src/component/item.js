import React, { Component } from "react";
class Item extends Component {
  render() {
    const { id, name, handleDelete,index, handleEdit } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>
          <button onClick = {(e) => handleEdit(name,id)} className="btn btn-success mr-2">
            <i className="fa fa-edit"></i>
          </button>
          <button onClick = {(e) => handleDelete(id)} className="btn btn-danger">
            <i className="fa fa-close"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default Item;
