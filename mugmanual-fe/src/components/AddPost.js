import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';

export class AddPost extends Component {
  state = {
    message: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addPost(this.state.message);
    document.getElementById('form').reset();
    this.props.updatePost()
  }

  onChange = (e) => {
    this.setState({ message: e.target.value });
  }

  render() {
    return (
      <Form id="form" name="message" value={this.state.message} onChange={this.onChange}>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows="3" type="text"
          name="message2"
          placeholder="What's on your mind?"
           />
          <ButtonToolbar>
          <Button  name="message1" onClick={this.onSubmit}
          variant="primary" size="sm">
          Post
          </Button>
          </ButtonToolbar>
          </Form.Group>
          </Form>
        )
  }
}

export default AddPost
