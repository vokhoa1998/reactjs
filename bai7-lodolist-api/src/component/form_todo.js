import React, { Component } from "react";
import FormCreate from "./form_create";
import FormSearch from "./form_search";
class FormTodo extends Component {
  render() {
      const {handleAdd,inputValue,handleChange,handleSearch, idUpdate} = this.props
    return (
      <>
        <FormCreate handleAdd = {handleAdd} inputValue ={inputValue} handleChange = {handleChange} idUpdate = {idUpdate}/>
        <FormSearch handleSearch = {handleSearch}/>
      </>
    );
  }
}

export default FormTodo;
