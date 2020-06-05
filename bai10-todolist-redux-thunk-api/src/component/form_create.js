import React, { Component } from "react";
import { connect } from "react-redux";
import {addTodo} from '../action'
class FormCreate extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  render() {
    return (
      <form class="form-inline">
        <div class="form-group mx-sm-3 mb-2">
          <input
            ref={this.inputRef}
            type="text"
            class="form-control"
            id="create"
            value={this.props.currentName}
            // onChange = {handleOnChange}
          />
        </div>
        <button
          onClick = {() => this.props.addTodo(this.inputRef.current.value)}
          type="button"
          class="btn btn-primary mb-2"
        >
          Submit
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('say mapState')
  console.log(state.currentName)
  return {
    currentName : state.currentName
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo : (data) => dispatch(addTodo(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCreate)
