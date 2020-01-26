import React, { Component } from 'react';
import BlogList from '../../components/BlogList/BlogList';
import BlogContext from '../../contexts/BlogContext';
import BlogApiService from '../../services/blog-api-service';
import NavBar from '../../components/NavBar/NavBar';
import Loader from '../../components/Loader/Loader';
import './EventsBlog.css';

export default class EventsBlog extends Component {
  static contextType = BlogContext
  constructor(props) {
    super(props);
    this.state = { loading: null };
  }

  componentDidMount() {
    this.context.clearError()
    this.getBlogFromDB();
  }

  async getBlogFromDB() {
    this.setState({ loading: true })
    try {
      BlogApiService.getBlogPosts()
        .then(this.context.setBlogPosts)
        // set min time for load screen to display
        .then(() => {
          return new Promise(resolve => 
            setTimeout(() => resolve(this.setState({ loading: false })), 1000)
          )
        })
    } catch (err) {
      this.context.setError(err)
    }
  }

  render() {
    const { blogPosts = [] } = this.context
    const loaderScreen = this.state.loading ? <Loader /> : null ; 
    return(
      <>
        <NavBar />
        {loaderScreen}
        <BlogList entries={blogPosts} hidden={this.state.loading}/>
      </>
    )
  }
}



