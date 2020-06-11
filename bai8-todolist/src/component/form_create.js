import React from "react";
import { useRef } from "react";
import { toast } from "react-toastify";
function FormCreate({ addTodo, valueInput, handleChange }) {
  const textRef = useRef();
  const notify = () =>
    toast.success("🦄 AddTodo Success!", {
      position: "top-right",
      autoClose: 3000,
    });
  return (
    <form class="form-inline create">
      <div class="form-group mx-sm-3 mb-2">
        <input
          onChange={(e) => handleChange(e)}
          ref={textRef}
          type="text"
          class="form-control"
          id="create"
          value={valueInput}
        />
      </div>
      <button
        onClick={((e) => addTodo(textRef), notify)}
        type="button"
        class="btn btn-primary mb-2"
      >
        Submit
      </button>
    </form>
  );
}
export default FormCreate;
