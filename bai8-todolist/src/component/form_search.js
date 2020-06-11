import React from "react";
import { useRef } from "react";
export default function FormSearch({ searchTodo }) {
  const nameSearch = useRef();
  return (
    <form class="form-inline">
      <div class="form-group mx-sm-3 mb-2">
        <input ref={nameSearch} type="text" class="form-control" />
      </div>
      <button
        onClick={() => searchTodo(nameSearch.current.value)}
        type="button"
        class="btn btn-primary mb-2"
      >
        Search
      </button>
    </form>
  );
}
