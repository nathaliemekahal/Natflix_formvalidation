import React, { Component } from 'react'
import {Badge} from 'react-bootstrap'

class Comments extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       comments:[]
    }
  }
  componentDidMount=async() =>{
    let id = this.props.id
    console.log('id changing',id)
    const commentsUrl = "https://striveschool.herokuapp.com/api/comments/";
    let response = await fetch(commentsUrl + id,{
      method:'GET',
      headers : new Headers({
        'Authorization':'Basic dXNlcjE4OlEyejVWN2hFRlU2SktSckU='
      })
    })
    let comments = await response.json()
    console.log('comments',comments)
    this.setState({comments})
  }

  
    render() {
        return (
           <>
           {this.state.comments.map((comment)=>(<p style={{color:'white'}}>{comment.comment} <Badge variant="info">{comment.rate}</Badge></p> ))}
           </>
        )
    }
}

export default Comments
