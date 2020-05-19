import React from 'react'
class Order extends React.Component {
    render() { 
        const {src} = this.props
        return (<img src = {src}/>)
    }
}
 
export default Order;