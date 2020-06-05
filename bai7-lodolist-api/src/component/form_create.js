import React, { Component } from "react";
class FormCreate extends Component {
    constructor(){
        super()
        this.inputRef = React.createRef();
    }
  render() {
      const {handleAdd,inputValue, handleChange,idUpdate} = this.props
    return (
      <form class="form-inline create">
        <div class="form-group mx-sm-3 mb-2">
          <input onChange ={(e) => handleChange(e)}ref = {this.inputRef} type="text" class="form-control" id="create" value = {inputValue}/>
        </div>
        <button onClick = {(e) => handleAdd(this.inputRef,idUpdate) }type="button" class="btn btn-primary mb-2">
          Submit
        </button>
      </form>
    );
  }
}

export default FormCreate;
