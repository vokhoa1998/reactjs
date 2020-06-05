import React, { Component } from 'react';
class FormSearch extends Component {
  constructor(){
    super()
    this.inputRef = React.createRef()
  }
  render() { 
    const {handleSearch} = this.props
    return ( 
            <form class="form-inline search">
            <div class="form-group mx-sm-3 mb-2">
            <input ref = {this.inputRef} type="text" class="form-control" id="create" />
            </div>
            <button //onClick = {(e) => {handleSearch(e,this.inputRef)}} 
            type="button" class="btn btn-primary mb-2">
              <i className = 'fa fa-search ' aria-hidden ='true' ></i>
            </button>
            </form>
    );
  }
}
 
export default FormSearch;