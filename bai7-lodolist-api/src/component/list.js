import React, { Component } from "react";
import Item from "./item";
class List extends Component {
  render() {
    const { todoLists, handleDelete, handleEdit, todoSearch } = this.props;

    const dataShow =
      todoSearch === ""
        ? todoLists.map((todo, index) => (
            <Item
              key={index}
              {...todo}
              handleDelete={handleDelete}
              index={index}
              handleEdit={handleEdit}
            />
          ))
        : todoSearch.map((todo, index) => (
            <Item
              key={index}
              {...todo}
              handleDelete={handleDelete}
              index={index}
              handleEdit={handleEdit}
            />
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

export default List;
