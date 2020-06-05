import React, { Component } from "react";
import { connect } from "react-redux";
import { searchTodo } from "../action";
class FromSearch extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  render() {
    return (
      <form class="form-inline search">
        <div class="form-group mx-sm-3 mb-2">
          <input
            ref={this.inputRef}
            type="text"
            class="form-control"
            id="search"
          />
        </div>
        <button
          onClick={() => this.props.searchTodo(this.inputRef.current.value)}
          type="button"
          class="btn btn-primary mb-2"
        >
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    );
  }
}
const mapDispatchToState = (dispatch) => {
  return {
    searchTodo: (value) => dispatch(searchTodo(value)),
  };
};
export default connect(null, mapDispatchToState)(FromSearch);
