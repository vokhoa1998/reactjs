import React, { Component } from "react";
import Item from "./Item";
class ListProduct extends React.Component {
  render() {
    const { products,handleAdd,handleDelete } = this.props;
    return (
      <>
        {products.map((item,index) => (
          <Item
            handleAdd = {handleAdd}
            handleDelete = {handleDelete}
            {...item}
            key = {index}
          />
        ))}
      </>
    );
  }
}

export default ListProduct;
