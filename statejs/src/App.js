import React from "react";
import ListProduct from "./listProduct";
import ListOrder from "./listOrder";
import pizza from "./pizza.jpg";
import audi from './audi.jpg'
import bim from './bim.jpg'
import lexus from './lexus.jpg'
import lambo from './lambo.jpg'
import './style.css'
import { Container,Row,Col,Button } from 'react-bootstrap';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      products: [
        { id: 0, name: "Cold cuts", price: 5, value: 0, src: pizza },
        { id: 1, name: "Pepperoni", price: 3.5, value: 0, src: lambo },
        { id: 2, name: "Feta", price: 2.5, value: 0, src: audi },
        { id: 3, name: "Mozzarella", price: 4.5, value: 0, src: lexus },
        { id: 4, name: "Swiss cheese", price: 1.5, value: 0, src: bim },
        { id: 5, name: "Spices", price: 6.5, value: 0, src: pizza },
        { id: 6, name: "Vegetable", price: 0.5, value: 0, src: pizza },
      ],
      orders: []
    };
  }
  handleIncrement = (id) => {
    const {orders,products} = this.state
    const rank = orders.length
    this.setState({
      products: products.map((item) => item.id === id ? {...item, value:item.value+1} : {...item}),
      orders :  [...orders, { ...products.find(item => item.id === id),rank: rank + 1 }]
    },this.handleCalTotal);
  };
  handleDecrement = (id) => {
    const {orders,products} = this.state
    const order = orders.filter(item => item.id === id);
    const max = order.length
    this.setState({
      products: products.map(item => {
        if(item.id === id){
          if(item.value > 0) return {...item, value : item.value - 1}
          else return {...item, value : 0}
        }
        else return {...item}
        
      }
        ),
      orders : [...orders.slice(0,max-1),...orders.slice(max)]
    },this.handleCalTotal)
  }
  handleCalTotal = () => {
   const {orders} = this.state
  this.setState({
    total : orders.reduce((sum,item) => (sum += item.price),0)
  })
  }
  handleCheckOut = () => {
    const {orders} = this.state
    const checkOut =  orders.reduce((sum,item) => (sum += item.price),0)
    alert(checkOut)
  }
  handleReset = () => {
    const {products,orders} = this.state
    this.setState({
      products : products.map(item => ({...item, value : 0 })),
      orders : [],
      total : 0 
    })
  }
  render() {
    const {products,orders,total} = this.state
    return (

      <Container >
        <Row>
          <Col xs = {8}>
              <h4>Your Pizza</h4>
              <ListOrder orders = {orders} />
          </Col>
          <Col className = 'item'>
            <Row className = 'header'>
              <span>Your pizza : </span>
              <span>{total}$</span>
              <Button onClick = {this.handleReset} variant = 'warning'>Reset Pizza</Button>
            </Row>
            <ListProduct
              handleIncrement={this.handleIncrement}
              handleDecrement = {this.handleDecrement}
              products = {products}
             
            />
            <Row>
              <Button onClick = {this.handleCheckOut} variant = 'primary'>Check Out</Button>
            </Row>
          </Col>  
        </Row>
      </Container>
    );
  }
}
export default App;
