import React, { Component } from "react";
import Item from "./Item";
import {Row,Button} from 'react-bootstrap';
class ListProduct extends React.Component {
    render() {
    const {handleIncrement,handleDecrement,products} = this.props

    return (
      <> 
       {products.map(product =>  <Item key = {`${product.id}`} {...product}
          handleIncrement={handleIncrement}
          handleDecrement = {handleDecrement}
        />)
       }
      </>
    );
  }
}

export default ListProduct;
