import React, { Component } from "react";
import FormCreate from "./form_create";
import FormSearch from "./form_search";
class FormTodo extends Component {
  render() {
    return (
      <>
        <FormCreate />
        <FormSearch />
      </>
    );
  }
}

export default FormTodo;
