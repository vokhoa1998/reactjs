import React from 'react'
import ListProduct from './listProduct';
import {Row,Col,Button,Badge } from 'react-bootstrap';
class Item extends React.Component{
    render(){
            const {id,name,price,value,handleIncrement,handleDecrement} = this.props
        return (
        <>
        <Row className = 'item'>
            <Col className = 'information'>
                <p>{name}</p>
                <p>{`${price} $`}</p>   
            </Col>
            <Col className = 'button'>
                <Button className = 'add' variant = 'success' onClick = {() => {handleIncrement(id)}} >+</Button>
                <Badge>{value}</Badge>
                <Button className = 'delete' variant="danger" onClick = {() => {handleDecrement(id)}}>-</Button>
            </Col>
        </Row>
        </>
        )
    }
}
export default Item;

        
