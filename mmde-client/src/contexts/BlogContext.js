import React, { Component } from 'react'
import { now } from 'moment';

const BlogContext = React.createContext({
    blogPosts: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setBlogPosts: () => {},
    addPost: () => {},
})

export default BlogContext

export class BlogContextProvider extends Component {
    state ={
        blogPosts: [],
        error: null,
    };

    addPost = post => {
        this.setState({
            blogPosts: [post, ...this.state.blogPosts]
        })
    }

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
            setError: this.setError,
            clearError: this.clearError,
            setBlogPosts: this.setBlogPosts,
            addPost: this.addPost,
        }
        return(
            <BlogContext.Provider value={value}>
                {this.props.children}
            </BlogContext.Provider>
        )
    }
}