import React from "react";
import ListProduct from "./component/listProduct";
import ListOrder from "./component/listOrder";
import audi from "./img/audi.jpg";
import bim from "./img/bim.jpg";
import lexus from "./img/lexus.jpg";
import lambo from "./img/lambo.jpg";
import vinfast from "./img/vinfast.jpg";
import mercedes from "./img/mercedes.jpg";
import "./style.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      products: [
        { id: 1, name: "Lamborghini", price: 4000, value: 0, src: lambo },
        { id: 2, name: "Audi", price: 5000, value: 0, src: audi },
        { id: 3, name: "Lexus", price: 3000, value: 0, src: lexus },
        { id: 4, name: "BWM", price: 2500, value: 0, src: bim },
        { id: 5, name: "Vin Fast", price: 1000, value: 0, src: vinfast },
        { id: 6, name: "Mercedes", price: 4500, value: 0, src: mercedes },
      ],
      orders: [],
      tmp : []
    };
  }
  handleAdd = (id) => {
    const { products, orders } = this.state;
    this.setState(
      {
        orders: [...orders, ...products.filter((product) => product.id === id)],
        products: products.map((product) =>
          product.id === id
            ? { ...product, value: product.value + 1 }
            : { ...product }
        ),
      },
      () => {
        this.handleTotal();
      }
    );
  };
  handleDelete = (id) => {
    const { orders, products } = this.state;
    const shows = orders.filter(order => order.id === id)
    shows.splice(0,1)
    this.setState({
      products: products.map((product) =>
        product.id === id && product.value > 0
          ? { ...product, value: product.value - 1 }
          : { ...product }
      ),
      orders : [...shows, ...orders.filter(order => order.id !== id)]
    }, () => {
      this.handleTotal()
    });
  };
  handleTotal = () => {
    this.setState({
      total: this.state.products.reduce(
      (sum, product) => (sum += product.price * product.value),0),  
    });
  };
  render() {
    const { products, orders, total } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h4>MENU</h4>
          </div>
          <div className="col-4">
            <p>{total}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-8 ">
            <ListOrder orders={orders} />
          </div>
          <div className="col-4">
            <ListProduct
              products={products}
              handleAdd={this.handleAdd}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
