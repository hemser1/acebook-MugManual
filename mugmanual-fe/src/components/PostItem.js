import React, { Component } from 'react'
import ReactTimeAgo from 'react-time-ago'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

export class PostItem extends Component {
  render() {
    const { id, username, message, created_at, user_id } = this.props.post;
    var date1 = new Date(created_at);
    return (
      <div>
        <center><Card style={cardStyle}>
        <Card.Body>
          <Card.Title>{username}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Posted: <ReactTimeAgo date={date1}/></Card.Subtitle>
          <Card.Text>
            {message}
            </Card.Text>
            <ButtonToolbar>
              <Button variant="primary" size="sm" onClick={this.props.delPost.bind(this, id)}>
              Delete
              </Button>
            </ButtonToolbar>
          </Card.Body>
        </Card><br></br>
        </center>
      </div>
    )
  }
}

// PropTypes
PostItem.propTypes = {
  post: PropTypes.object.isRequired
}

const cardStyle = {
  width: '70rem',
  color: 'Black'
}

export default PostItem;
