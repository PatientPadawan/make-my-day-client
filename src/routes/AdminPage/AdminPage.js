import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlogList from '../../components/BlogList/BlogList';
import BlogContext from '../../contexts/BlogContext';
import BlogApiService from '../../services/blog-api-service';
import NavBar from '../../components/NavBar/NavBar';
import './AdminPage.css';

export default class AdminPage extends Component {
  componentDidMount() {
    const { clearError } = this.context;
    clearError();
    this.getBlogFromDB();
  }

  async getBlogFromDB() {
    const { setBlogPosts, setError } = this.context;
    try {
      BlogApiService.getBlogPosts()
        .then(setBlogPosts);
    } catch (err) {
      setError(err);
    }
  }

  handleAddPost = () => {
    const { addPost, accessToken } = this.context;
    const post = {
      published: 'false',
      content: '<h1>Best Blog Ever</h1><img src=\'https://i.imgur.com/uIdYsLu.jpg\' alt=\'DJ placeholder\' width=\'200px\'/> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi blandit cursus. Interdum varius sit amet mattis. Lectus arcu bibendum at varius. Aliquet porttitor lacus luctus accumsan.</p>',
    };
    addPost(post, accessToken);
  }

  static contextType = BlogContext

  render() {
    const { blogPosts = [] } = this.context;
    return (
      <>
        <NavBar />
        <section id="Admin_addPostSection">
          <button onClick={this.handleAddPost} className="Admin_addPost" type="button">
            <FontAwesomeIcon
              size="3x"
              icon="plus-square"
              className="Admin_icons"
            />
            <h3 id="Admin_post">Post</h3>
          </button>
        </section>
        <BlogList entries={blogPosts} />
      </>
    );
  }
}