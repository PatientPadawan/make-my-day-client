import React, { Component } from 'react'

export const nullPost = {
    id: '',
    title: '',
    image: '',
    content: '',
    index: null,
    dateCreated: '',
    published: false,
}

const BlogEntryContext = React.createContext({
    post: nullPost,
    error: null,
    setError: () => {},
    clearError: () => {},
    setPost: () => {},
    delPost: () => {},
    pubPost: () => {},
    unPubPost: () => {},
})

export default BlogEntryContext

export class BlogEntryProvider extends Component {
    state = {
        post: nullPost,
        error: null,
    };

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setPost = post => {
        this.setState({ post })
    }

    delPost = post => {
        // PLACEHOLDER
    }

    pubPost = post => {
        // PLACEHOLDER
        // POTENTIALLY MAKE A PUB/UNPUB SWITCH AND DELETE unPubPost()
    }

    unPubPost = post => {
        // PLACEHOLDER
    }

    render() {
        const value = {
            post: this.state.post,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setPost: this.setPost,
            delPost: this.delPost,
            pubPost: this.pubPost,
            unPubPost: this.unPubPost,
        }
        return(
            <BlogEntryContext.Provider value={value}>
                {this.props.children}
            </BlogEntryContext.Provider>
        )
    }
}