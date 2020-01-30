import React, { Component } from 'react';
import propTypes from 'prop-types';
import BlogEntry from '../../components/BlogEntry/BlogEntry';
import BlogApiService from '../../services/blog-api-service';
import BlogContext from '../../contexts/BlogContext';
import PostEditor from '../../components/PostEditor/PostEditor';
import NavBar from '../../components/NavBar/NavBar';
import './EditPage.css';


export default class EditPage extends Component {
  static contextType = BlogContext

  render() {
    const { match } = this.props;
    const { blogPosts } = this.context;
    const postToEdit = BlogApiService.getBlogById(match.params.postId, blogPosts);
    return (
      <>
        <NavBar />
        <section className="editPage_content">
          <BlogEntry entries={postToEdit} />
          <PostEditor postToEdit={postToEdit} />
        </section>
      </>
    );
  }
}

EditPage.propTypes = {
  match: propTypes.shape({
    path: propTypes.string,
    url: propTypes.string,
    exact: propTypes.bool,
    params: propTypes.shape({
      postId: propTypes.string,
    }),
  }).isRequired,
};
