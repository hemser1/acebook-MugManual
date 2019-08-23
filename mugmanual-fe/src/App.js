import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import Posts from './components/Posts';
import AddPost from './components/AddPost';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/posts')
    .then(res => this.setState({ posts: res.data}))
  }

  addPost(message) {
         axios.post('http://localhost:3001/api/v1/posts', { post: {message} })
         .then(response => {
             console.log(response)
             const posts = [ ...this.state.posts, response.data ]
             this.setState({posts})
             this.updatePost()
         })
         .catch(error => {
             console.log(error)
         })
     }

     updatePost() {
       axios.get('http://localhost:3001/api/v1/posts')
       .then(res => this.setState({ posts: res.data}))
     }

  // Delete Post
  delPost = (id) => {
    axios.delete(`http://localhost:3001/api/v1/posts/${id}`).then(response => {
      this.setState({ posts: [...this.state.posts.filter(post => post.id !== id)]})
      })
  }

  render() {
    // console.log(this.state.posts)
    return (
      <Router>
      <div>
      <Header/>
        <Route exact path='/users_walls' component={() => {
         window.location.href = 'http://localhost:3001/users';
         return null;
          }}/>

          {/* <Route exact path="/" render={props => (
            <Posts />
          )} /> */}
        <AddPost addPost={this.addPost.bind(this)}
                updatePost={this.updatePost.bind(this)} />
        <Posts
        posts={this.state.posts}
        delPost={this.delPost}/>
      </div>
      </Router>
    )
  }
}

export default App;
