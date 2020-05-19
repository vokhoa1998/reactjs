import React from 'react'

export default function state() {
    return (
        <div className = 'App'>
            
        </div>
    )
}
class Demo extends React.Component{
    constructor(){
        this.state = {
            count : 0,
            text : ''
        }
        
    }
    handleClick(e){
        this.setState({
            count : this.state.count + 1
        })
    }
    // e la doi tuong cua event
    handleChange(e){
        this.setState({
            text : e.target.value
        })
    }
    render(){
        return(
            <div>
                <input value = {this.state.text}></input>
                <h1>{this.state.text}</h1>
                <h2>{this.state.count}</h2>
                <button onClick ={this.handleClick.bind(this)}>+</button>
                {/* <button onClick ={this.handleChange.bind(this)}>+</button> */}
                <ButtonCount handleChange = {this.handleChange}></ButtonCount>
            </div>
        )
    }
}
class ButtonCount extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <button onClick ={this.handleChange.bind(this)}>+</button>
        )
    }
}