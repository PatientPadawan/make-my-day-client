import React, { Component } from 'react';
import BlogList from '../../components/BlogList/BlogList';
import BlogContext from '../../contexts/BlogContext';
import BlogApiService from '../../services/blog-api-service';
import NavBar from '../../components/NavBar/NavBar';
import './EventsBlog.css';

export default class EventsBlog extends Component {
  static contextType = BlogContext

  componentDidMount() {
    this.context.clearError()
    this.getBlogFromDB();
  }

  async getBlogFromDB() {
    try {
      BlogApiService.getBlogPosts()
        .then(this.context.setBlogPosts)
    } catch (err) {
        this.context.setError(err)
    }
  }

  render() {
    const { blogPosts = [] } = this.context
    return(
      <>
        <NavBar />
        <BlogList entries={blogPosts} />
      </>
    )
  }
}



