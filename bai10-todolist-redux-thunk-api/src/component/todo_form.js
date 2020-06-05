import React, { Component } from "react";
import FormSearch from "./form_search";
import FormCreate from "./form_create";
class TodoForm extends Component {
  render() {
    const { handleSubmit, inputText, handleOnChange, handleSearch } = this.props;
    return (
      <>
        <FormSearch 
        //handleSearch ={handleSearch}
        />
        <FormCreate
        //   handleSubmit={handleSubmit}
        //   inputText={inputText}
        //   handleOnChange={handleOnChange}
          
         />
      </>
    );
  }
}

export default TodoForm;
