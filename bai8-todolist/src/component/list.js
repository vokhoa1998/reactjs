import React, { Component } from "react";
import Item from "./item";
export default function List({ todoLists, deleteTodo, editTodo, newTodo }) {
  const dataShow =
    newTodo === ""
      ? todoLists.map((todo, index) => (
          <Item
            key={index}
            {...todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
           
          />
        ))
      : newTodo.map((todo, index) => (
          <Item
            key={index}
            {...todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
         
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
