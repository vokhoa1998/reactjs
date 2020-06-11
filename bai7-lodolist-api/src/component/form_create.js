import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
class FormCreate extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  render() {
    const { handleAdd, inputValue, handleChange, idUpdate } = this.props;
    const notify = () => toast("Add Success!!");
    return (
      <>
        <form class="form-inline create">
          <div class="form-group mx-sm-3 mb-2">
            <input
              onChange={(e) => handleChange(e)}
              ref={this.inputRef}
              type="text"
              class="form-control"
              id="create"
              value={inputValue}
            />
          </div>
          <button
            onClick={(e) => handleAdd(this.inputRef, idUpdate)}
            type="button"
            class="btn btn-primary mb-2"
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </>
    );
  }
}

export default FormCreate;
