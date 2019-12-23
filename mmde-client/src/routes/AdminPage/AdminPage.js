import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlogList from '../../components/BlogList/BlogList';
import BlogContext from '../../contexts/BlogContext';
import BlogApiService from '../../services/blog-api-service';
import NavBar from '../../components/NavBar/NavBar';
import './AdminPage.css';

export default class AdminPage extends Component {
    static contextType = BlogContext

    handleAddPost = () => {
        const placeHolderPost = {
            _id: "",
            index: this.context.blogPosts.length,
            published: false,
            dateCreated: `${new Date()}`,
            dateEdited: `${new Date()}`,
            content: `<h1>Best Blog Ever</h1><img src='https://i.imgur.com/uIdYsLu.jpg' alt='DJ placeholder' width='200px'/> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi blandit cursus. Interdum varius sit amet mattis. Lectus arcu bibendum at varius. Aliquet porttitor lacus luctus accumsan. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Diam maecenas ultricies mi eget. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Nibh cras pulvinar mattis nunc sed blandit libero. Lectus proin nibh nisl condimentum id venenatis a. Amet nisl suscipit adipiscing bibendum est ultricies integer. At volutpat diam ut venenatis. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor magna eget est lorem. Eget sit amet tellus cras adipiscing enim. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Suspendisse in est ante in nibh mauris cursus. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Enim ut tellus elementum sagittis vitae et leo duis ut. Vel turpis nunc eget lorem dolor.</p>`
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
                <NavBar />
                <section>
                    <button onClick={this.handleAddPost} className='Admin_addPost'>
                        <FontAwesomeIcon
                            size='3x'
                            icon='plus-square'
                            className='Admin_icons'
                        />
                        <h3 id='Admin_post'>Post</h3>
                    </button>
                </section>
                <BlogList entries={blogPosts} />
            </>
        )
    }
}