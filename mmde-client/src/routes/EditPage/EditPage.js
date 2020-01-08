import React, { Component } from 'react';
import BlogEntry from '../../components/BlogEntry/BlogEntry';
import BlogApiService from '../../services/blog-api-service';
import BlogContext from '../../contexts/BlogContext';
import PostEditor from '../../components/PostEditor/PostEditor';
import NavBar from '../../components/NavBar/NavBar';
import './EditPage.css';


export default class EditPage extends Component {
    static contextType = BlogContext
  
    render() {
        const postToEdit = BlogApiService.getBlogById(this.props.match.params.postId, this.context.blogPosts);
        return(
            <>
                <NavBar />
                <section>
                    <BlogEntry entries={postToEdit} />
                    <PostEditor postToEdit={postToEdit} />
                </section>
            </>
        )
    }
}