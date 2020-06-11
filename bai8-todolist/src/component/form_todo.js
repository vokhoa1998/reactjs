import React, { Component } from "react";
import FormCreate from "./form_create";
import FormSearch from "./form_search";

export default function FormTodo({
  addTodo,
  valueInput,
  handleChange,
  searchTodo
}) {
  return (
    <div>
      <FormCreate
        addTodo={addTodo}
        valueInput={valueInput}
        handleChange={handleChange}
      />
      <FormSearch searchTodo={searchTodo} />
    </div>
  );
}
