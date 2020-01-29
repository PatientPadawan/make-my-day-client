import React, { Component } from 'react';
import BlogApiService from '../services/blog-api-service';

const BlogContext = React.createContext({
  blogPosts: [],
  accessToken: null,
  error: null,
  setAccessToken: () => {},
  setError: () => {},
  clearError: () => {},
  setBlogPosts: () => {},
  addPost: () => {},
  delPost: () => {},
  pubPost: () => {},
  updateBlogPost: () => {},
});

export default BlogContext;

export class BlogContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: [],
      error: null,
    };
  }

  setAccessToken = (accessToken) => {
    this.setState({ accessToken });
  }

  updateBlogPost = (postId, newContent, token) => {
    const { blogPosts } = this.state;
    BlogApiService.putBlogPostContent(postId, newContent, token)
      .then((result) => {
        this.setState({
          blogPosts: blogPosts.map(
            (post) => (post.id === postId
              ? { ...post, content: `${result.content}` }
              : post),
          ),
        });
      });
  }

  pubPost = (postId, token) => {
    const { blogPosts } = this.state;
    const targetPost = BlogApiService.getBlogById(postId, blogPosts);
    BlogApiService.putBlogPostPublish(postId, !targetPost.published, token)
      .then(this.setState({
        blogPosts: blogPosts.map(
          (post) => (post.id === postId
            ? { ...post, published: !post.published }
            : post),
        ),
      }));
  }

  addPost = (post, token) => {
    const { blogPosts } = this.state;
    BlogApiService.addBlogPost(post, token)
      .then((res) => {
        this.setState({
          blogPosts: [res, ...blogPosts],
        });
      });
  }

  delPost = (postId, token) => {
    const { blogPosts } = this.state;
    BlogApiService.deleteBlogPost(postId, token)
      .then(this.setState({
        blogPosts: blogPosts.filter((el) => el.id !== postId),
      }));
  }

  setBlogPosts = (blogPosts) => {
    blogPosts.sort((a, b) => b.id - a.id);
    this.setState({ blogPosts });
  }

  setError = (error) => {
    this.setState({ error });
  }

  clearError = () => {
    this.setState({ error: null });
  }

  render() {
    const { blogPosts, error, accessToken } = this.state;
    const value = {
      blogPosts,
      error,
      accessToken,
      setError: this.setError,
      clearError: this.clearError,
      setBlogPosts: this.setBlogPosts,
      addPost: this.addPost,
      delPost: this.delPost,
      pubPost: this.pubPost,
      updateBlogPost: this.updateBlogPost,
      setAccessToken: this.setAccessToken,
    };
    const { children } = this.props;
    return (
      <BlogContext.Provider value={value}>
        {children}
      </BlogContext.Provider>
    );
  }
}
