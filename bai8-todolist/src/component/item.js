import React, { Component } from "react";
import {toast} from 'react-toastify'
export default function Item({id,name,deleteTodo,editTodo}){
  const notify = () =>
    toast.error("🦄 Delete Success!", {
      position: "top-right",
      autoClose: 3000
    });
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>
          <button onClick = {() => editTodo(id)} className="btn btn-success mr-2">
            <i className="fa fa-edit"></i>
          </button>
          <button onClick = {() => deleteTodo(id)} className="btn btn-danger">
            <i className="fa fa-close"></i>
          </button>

        </td>
      </tr>
    );
}


