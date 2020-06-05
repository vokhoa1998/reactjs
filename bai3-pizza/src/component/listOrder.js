import React from 'react'
import Order from './Order'
class ListOrder extends React.Component{
   render(){
       const {orders} = this.props
       return (

        <>
        {orders.map((orders,index) => <Order key = {index} src = {orders.src}/>)}
        </>
       )
   }
}
export default ListOrder;

