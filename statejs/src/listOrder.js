import React from 'react'
import Order from './Order'
class ListOrder extends React.Component{
   render(){
       const {orders} = this.props 
       console.log(orders)
       return (
        <>
         {orders.map((order,index) => <Order key = {`${index}`} src = {order.src} />)}
        </>
       )
   }
}
export default ListOrder;

