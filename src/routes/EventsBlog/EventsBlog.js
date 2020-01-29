import React, { Component } from 'react';
import BlogList from '../../components/BlogList/BlogList';
import BlogContext from '../../contexts/BlogContext';
import BlogApiService from '../../services/blog-api-service';
import NavBar from '../../components/NavBar/NavBar';
import Loader from '../../components/Loader/Loader';
import './EventsBlog.css';

export default class EventsBlog extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    const { clearError } = this.context;
    clearError();
    this.getBlogFromDB();
  }

  async getBlogFromDB() {
    const { setBlogPosts, setError } = this.context;
    this.setState({ loading: true });
    try {
      BlogApiService.getBlogPosts()
        .then(setBlogPosts)
        .then(() => {
          this.setState({ loading: false });
        });
    } catch (err) {
      setError(err);
    }
  }

  static contextType = BlogContext;

  render() {
    const { blogPosts = [] } = this.context;
    const { loading } = this.state;
    return (
      <>
        <NavBar />
        {
          loading
            ? <Loader />
            : <div className="eventsBlog"><BlogList entries={blogPosts} /></div>
        }
      </>
    );
  }
}
