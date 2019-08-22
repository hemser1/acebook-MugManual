import React, { Component } from 'react';
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

  // // Add Post
  // addPost = (message) => {
  //   axios.post('http://localhost:3001/api/v1/posts', {post: {message: ''}})
  //   .then(res => {
  //     this.setState({ posts: [...this.state.posts, res.data] })
  //   })
  // }





  render() {
    // console.log(this.state.posts)
    return (
      <div>
        <Header />
        <AddPost addPost={this.addPost.bind(this)}
                updatePost={this.updatePost.bind(this)} />
        <Posts
        posts={this.state.posts}
        delPost={this.delPost}/>
      </div>
    )
  }
}


export default App;
