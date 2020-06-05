import React, { Component } from "react";
import { addTodo, changeTodo } from "../action";
import { connect } from "react-redux";
class FormCreate extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  render() {
    return (
      <form class="form-inline create">
        <div class="form-group mx-sm-3 mb-2">
          <input
            onChange = {(e) => this.props.changeTodo(e.target.value)}
            ref={this.inputRef}
            type="text"
            class="form-control"
            id="create"
            value={this.props.value}
          />
        </div>
        <button
          onClick={() => this.props.addTodo(this.inputRef.current.value)}
          type="button"
          class="btn btn-primary mb-2"
        >
          Submit
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
    changeTodo: (target) => dispatch(changeTodo(target)),
  };
};
const mapStateToProps = (state) => {
  return {
    value: state.value,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormCreate);
