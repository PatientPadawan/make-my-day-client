import React, { Component } from 'react'

const BlogContext = React.createContext({
    blogPosts: [],
    error: null,
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
    state ={
        blogPosts: [],
        error: null,
    };

    updateBlogPost = (postIndex, newContent) => {
        this.setState({
            blogPosts: this.state.blogPosts.map(
                post => post.index === postIndex ? 
                {...post, content: `${newContent}`} : 
                post
            )
        })
    }

    addPost = post => {
        this.setState({
            blogPosts: [post, ...this.state.blogPosts]
        })
    }

    delPost = postIndex => {
        this.setState({
            blogPosts: this.state.blogPosts.filter((el) => {
                return el.index !== postIndex;
            })
        })
    }

    pubPost = postIndex => {
        this.setState({
            blogPosts: this.state.blogPosts.map(
                post => post.index === postIndex ?
                {...post, published: !post.published} :
                post
            )
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
            delPost: this.delPost,
            pubPost: this.pubPost,
            updateBlogPost: this.updateBlogPost,
        }
        return(
            <BlogContext.Provider value={value}>
                {this.props.children}
            </BlogContext.Provider>
        )
    }
}