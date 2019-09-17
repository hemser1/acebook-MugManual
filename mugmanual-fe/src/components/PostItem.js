import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import ReactTimeAgo from 'react-time-ago'

export class PostItem extends Component {
  render() {
    const { id, username, message, created_at, user_id } = this.props.post;
    return (
      <div>
        <center><Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{username}</Card.Title>
          <Card.Text>
            {message}
          </Card.Text>
          <ButtonToolbar>
          <Button variant="primary" size="sm" onClick={this.props.delPost.bind(this, id)}>
          Delete
          </Button>
          </ButtonToolbar>
          </Card.Body>
        </Card></center><br></br>
      </div>
    )
  }
}

// PropTypes
PostItem.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostItem;
