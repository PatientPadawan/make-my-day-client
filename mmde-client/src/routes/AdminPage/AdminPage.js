import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BlogList from '../../components/BlogList/BlogList'
import BlogContext from '../../contexts/BlogContext'
import BlogApiService from '../../services/blog-api-service'
import './AdminPage.css'

export default class AdminPage extends Component {
    static contextType = BlogContext

    handleAddPost = () => {
        const placeHolderPost = {
            _id: "",
            index: this.context.blogPosts.length,
            title: `I'm a new post edit me!`,
            published: false,
            image: 'https://i.imgur.com/uIdYsLu.jpg',
            dateCreated: `${new Date()}`,
            dateEdited: `${new Date()}`,
            content: 'Placeholder content for the best blog ever',
        }
        this.context.addPost(placeHolderPost)
    }
    
    componentDidMount() {
        this.context.clearError()
        BlogApiService.getBlogPosts()
        .then(this.context.setBlogPosts)
        .catch(this.context.setError)
    }
    
    render() {
        const { blogPosts = [] } = this.context
        return(
            <>
                <section>
                    <button onClick={this.handleAddPost} className='Admin_addPost'>
                        <FontAwesomeIcon
                            size='3x'
                            icon='plus-square'
                            className='Admin_icons'
                        />
                        <h3 id='Admin_postButton'>Post</h3>
                    </button>
                </section>
                <BlogList entries={blogPosts} />
            </>
        )
    }
}