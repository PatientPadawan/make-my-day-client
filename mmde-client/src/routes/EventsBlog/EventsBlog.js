import React, { Component } from 'react'
import BlogList from '../../components/BlogList/BlogList'
import BlogContext from '../../contexts/BlogContext'
import BlogApiService from '../../services/blog-api-service'
import './EventsBlog.css'

export default class EventsBlog extends Component {
  static contextType = BlogContext

  componentDidMount() {
    this.context.clearError()
    BlogApiService.getBlogPosts()
    .then(this.context.setBlogPosts)
    .catch(this.context.setError)
  }

  render() {
    const { blogPosts = [] } = this.context
    return(
      <BlogList entries={blogPosts} />
    )
  }
}



