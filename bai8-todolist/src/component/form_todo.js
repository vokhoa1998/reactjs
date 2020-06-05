import React, { Component } from "react";
import FormCreate from "./form_create";
import FormSearch from "./form_search";
class FormTodo extends Component {
  render() {
      const {handleAdd,inputValue,handleChange,handleSearch} = this.props
    return (
      <>
        <FormCreate handleAdd = {handleAdd} inputValue ={inputValue} handleChange = {handleChange}/>
        <FormSearch handleSearch = {handleSearch}/>
      </>
    );
  }
}

export default FormTodo;
