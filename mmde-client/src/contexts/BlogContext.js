import React, { Component } from 'react'

const BlogContext = React.createContext({
    blogPosts: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setBlogPosts: () => {},
    addPost: () => {},
    updateBlogPost: () => {},
})

export default BlogContext

export class BlogContextProvider extends Component {
    state ={
        blogPosts: [],
        error: null,
    };

    updateBlogPost = (postIndex, newContent) => {
        this.setState(prevState => ({
            blogPosts: prevState.blogPosts.map(
                post => post.index === postIndex ? {...post, content: `${newContent}`} : post
            )
        }))
    }

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
            updateBlogPost: this.updateBlogPost,
        }
        return(
            <BlogContext.Provider value={value}>
                {this.props.children}
            </BlogContext.Provider>
        )
    }
}