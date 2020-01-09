import React, { Component } from 'react'
import BlogApiService from '../services/blog-api-service'

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
})

export default BlogContext

export class BlogContextProvider extends Component {
    state = {
        blogPosts: [],
        error: null,
    };

    setAccessToken = (accessToken) => {
        this.setState({ accessToken })
    }

    updateBlogPost = (postId, newContent, token) => {
        BlogApiService.putBlogPostContent(postId, newContent, token)
        .then((result) => {
            this.setState({
                blogPosts: this.state.blogPosts.map(
                    post => post.id === postId ? 
                    {...post, content: `${result.content}`} : 
                    post
                )
            })
        })
    }

    pubPost = (postId, token) => {
        const targetPost = BlogApiService.getBlogById(postId, this.state.blogPosts)
        
        BlogApiService.putBlogPostPublish(postId, !targetPost.published, token)
        .then(this.setState({
            blogPosts: this.state.blogPosts.map(
                post => post.id === postId ?
                {...post, published: !post.published} :
                post
            )
        })
    )}

    addPost = (post, token) => {
        BlogApiService.addBlogPost(post, token)
        .then((result) => {
            this.setState({
                blogPosts: [...this.state.blogPosts, result]
            })
        })
    }

    delPost = (postId, token) => {
        BlogApiService.deleteBlogPost(postId, token)
        .then(this.setState({
            blogPosts: this.state.blogPosts.filter((el) => {
                return el.id !== postId;
            })
        })
    )}

    setBlogPosts = blogPosts => {
        this.setState({ blogPosts })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const value = {
            blogPosts: this.state.blogPosts,
            error: this.state.error,
            accessToken: this.state.accessToken,
            setError: this.setError,
            clearError: this.clearError,
            setBlogPosts: this.setBlogPosts,
            addPost: this.addPost,
            delPost: this.delPost,
            pubPost: this.pubPost,
            updateBlogPost: this.updateBlogPost,
            setAccessToken: this.setAccessToken,
        }
        return(
            <BlogContext.Provider value={value}>
                {this.props.children}
            </BlogContext.Provider>
        )
    }
}