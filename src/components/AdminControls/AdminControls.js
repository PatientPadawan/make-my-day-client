import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BlogContext from '../../contexts/BlogContext';
import './AdminControls.css';

export default class AdminControls extends Component {
  static contextType = BlogContext

  render() {
    const { published, postId, onDelete } = this.props;
    const { accessToken, pubPost, delPost } = this.context;

    return (
      <>
        <button
          onClick={() => pubPost(postId, accessToken)}
          type="button"
        >
          { published ? 'Unpublish' : 'Publish' }
        </button>
        <button
          onClick={() => {
            if (window.confirm('Delete the item?')) {
              onDelete();
              delPost(postId, accessToken);
            }
          }}
          type="button"
        >
          Delete
        </button>
        <Link to={`/edit/${postId}`}>
          <button type="button">Edit</button>
        </Link>
      </>
    );
  }
}

AdminControls.propTypes = {
  published: propTypes.bool.isRequired,
  postId: propTypes.number.isRequired,
  onDelete: propTypes.func.isRequired,
};
