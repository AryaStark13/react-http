import React, { Component } from 'react'
import axios from 'axios'

export default class PostForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userId: '',
         title: '',
         body: ''
      }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }

  render() {
    const { userId, title, body} = this.state

    return (
      <div>
        <h2>
          Sends a POST request to the server over at <a href='https://jsonplaceholder.typicode.com/posts'>jsonplaceholder.typicode.com/posts</a>
        </h2>
        <div>
          <form onSubmit={this.submitHandler} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column', margin: '100px' }}>
              <div>
                  User ID: <input type="text" name="userId" value={userId} onChange={this.changeHandler} style={{ marginLeft: '10px' }}/> 
              </div>
              <br />
              <div>
                  Title: <input type="text" name="title" value={title} onChange={this.changeHandler} style={{ marginLeft: '10px' }}/>
              </div>
              <br />
              <div>
                  Body: <input type="text" name="body" value={body} onChange={this.changeHandler} style={{ marginLeft: '10px' }}/>
              </div>
              <br />
              <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
