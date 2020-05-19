import React from 'react';
import react from './react.png'
import Export from './export'
import './style.css'
const items = [
  {
    src : react,
    title : 'Introduce learn React JS',
    posted : 'James',
    date : '2020 May 13',
    language : 'Javascript',
    tag : ["React"],
    evaluation : '4',
    content : 'Introduce learn react for effective . If you starter with React (or part front end...)',
    button : 'Read more'
  },
  {
    src : react,
    title : 'Introduce structuring folder and how to write component standard in ReactJS',
    posted : 'James',
    date : '2020 May 13',
    language : 'Javascript',
    tag : ["Programing", "Development Environment","React"],
    evaluation : '5',
    content : 'Introduce learn react for effective . If you starter with React (or part front end...)',
    button : 'Read more'
  },
  {
    src : react,
    title : 'Introduce install Webpack for write REACTJS/ES6',
    posted : 'James',
    date : '2020 May 13',
    language : 'Javascript',
    tag : ["Programing", "Development Environment","React"],
    evaluation : '4',
    content : 'Introduce learn react for effective . If you starter with React (or part front end...)',
    button : 'Read more'
  },
  {
    src : react,
    title : 'Introduce use Redux effective in React Application',
    posted : 'James',
    date : '2020 May 13',
    language : 'Javascript',
    tag : ["Programing","React", "React Native"],
    evaluation : '4',
    content : 'Introduce learn react for effective . If you starter with React (or part front end...)',
    button : 'Read more'
  },
  {
    src : react,
    title : 'CycleLife of component in ReactJS with ES6',
    posted : 'James',
    date : '2020 May 13',
    language : 'Javascript',
    tag : ["Programing","React"],
    evaluation : '5',
    content : 'Introduce learn react for effective . If you starter with React (or part front end...)',
    button : 'Read more'
  },

]

function App() {
  return (    
    <div className = 'container'>
          <div className = 'list'>
              <div className= 'header'>
              <p>SERIES : REACT JS : BASIC TO ADVANCED</p>
              </div>
              <List data = {items}/>
          </div>
          <div className = 'export'>
              <div className = 'div-sidebar'>
                  <SideBar />
              </div>
              <div className= 'list one'>
                  <div className= 'header one'>
                    <p>NEW BLOGS</p>
                  </div>
                  <Export />
              </div>
          </div>
    </div>
  );
}

export default App;
class List extends React.Component{
  render(){
    const {data} = this.props;
    const array = data.map((item, index) => {
      return <Item  key={`new${index}`} {...item}/>
    })
    return ( array )
  }
    
}
class Item extends React.Component{
  render(){
    const {src, title, posted, date,language, tag, evaluation, content, button} = this.props;
    var icons = [
      <ion-icon name="star-outline"></ion-icon>,
      <ion-icon name="star-outline"></ion-icon>,
      <ion-icon name="star-outline"></ion-icon>,
      <ion-icon name="star-outline"></ion-icon>,
      <ion-icon name="star-outline"></ion-icon>
    ]
    return (
    <div className = 'list-div'>
    <div className = 'list-div-img'>
    <img src= {src} />
    </div>
    <div className = 'list-div-item'>
    <p className = 'title'>{title}</p><br/>
    <p className = 'information'>Posted by {posted} | {date} | {language}.</p><br/>
    <p>{tag.join(', ')} | {icons}</p><br/>
    <p>{content}</p><br/>
    <button type = 'button'>{button}</button>
    </div>
    </div>
    )
  }
}
class SideBar extends React.Component{
  render(){
    return (    
      <Register />     
    )
  }
}
class Register extends React.Component{
  render(){
    return(
      <>
      <div className = 'item'>
      <p className = 'head'>Register to receive new Blog</p>
      </div>
      <div className = 'item'>
      <p>Technology is changing fast. We reach out world each other with blogs quality
       into our page FullStack.
      </p>
      </div>
      <div className = 'item one'>
        <label for = 'username'>USERNAME</label>
        <input class = 'input' type='input'/> <br/>
        <label  id = 'label'>PASSWORD</label>
        <input class = 'input' type = 'input' /> <br/>
      </div>
      <div className = 'item'>
      <input className = 'position' type = 'checkbox' />
      <p >I agree receive new blogs from you via my email</p>
      <label for = 'register' id = 'register' >REGISTER</label>
      <input class = 'input one' type = 'button' id = 'register' />
      </div>
      <div className = 'item'>
      <p>You will receive news and blogs useful form our as soon as possible. Please wait 
notification </p>
      </div>
      </>
    )
  }
}


