import React from 'react'
import hacker from './hacker.jpg'
import './style.css'
const news = [
    {
      src : hacker,
      title : 'Willing with serverless',
      date : '2020 May 13',
      tag : ['Technology','Operating System','Web Host', 'Development Environment']
    },
    {
      src : hacker,
      title : 'Willing with serverless',
      date : '2020 May 13',
      tag : ['Communicate']
    },
    {
      src : hacker,
      title : 'Willing with serverless',
      date : '2020 May 13',
      tag : ['Programing']
    },
    {
      src : hacker,
      title : 'Willing with serverless',
      date : '2020 May 13',
      tag : [ 'Programing','Development Environment','Python',]
    },
    {
      src : hacker,
      title : 'Willing with serverless',
      date : '2020 May 13',
      tag : ['Technology','Nodejs','GraphQl']
    },
  
  ]
function Export (){
  return <News news = {news}/>
}
export default Export;
class News extends React.Component{
    render(){
      const {news} = this.props;
      const array = news.map((item,index) => <NewsList key={`line${index}`} {...item}/>)
      return (array)
    }
}
function NewsList(props){
  const {src,title,date,tag} = props
  return (
  <div className = 'list-div one'>
    <div className = 'list-div-img'>
    <img id = 'icon' src = {src} />
    </div>
    <div className = 'list-div-item'>
    <p className = 'title one'>{title}</p><br/>
    <p className = 'information'> {date} | {tag.join('. ')}</p><br/>
    </div>
    </div>
  )
}

