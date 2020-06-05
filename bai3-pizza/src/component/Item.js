import React from 'react'
class Item extends React.Component{
    render(){
        const {name, price,value,id} = this.props
        return (
        <>
         <div className = 'information'>
            <p>{name}</p>
            <p>{`${price}$`}</p>
         </div>
         <div className = 'button'>
            <button onClick = {(e) => this.props.handleDelete(id)} type="button" class="btn btn-primary">-</button>
            <span>{value}</span>
            <button onClick = {(e) => this.props.handleAdd(id)} type="button" class="btn btn-danger">+</button>
         </div>
        </>
        )
    }
}
export default Item;

        
