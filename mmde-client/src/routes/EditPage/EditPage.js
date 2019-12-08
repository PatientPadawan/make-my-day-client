import React, { Component } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import BlogEntry from '../../components/BlogEntry/BlogEntry'
import BlogApiService from '../../services/blog-api-service'
import BlogContext from '../../contexts/BlogContext'
import './EditPage.css'


export default class EditPage extends Component {
    static contextType = BlogContext

    handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    }
  
    render() {
        const postToEdit = BlogApiService.getBlogByIndex(this.props.match.params.postIndex, this.context.blogPosts);
        return(
            <section>
                <BlogEntry entries={postToEdit} />
                <Editor
                    initialValue={postToEdit.content}
                    init={{
                        height: 500,
                        menubar: true,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help'
                        }
                    }
                    onChange={this.handleEditorChange}
                />
            </section>
        )
    }
}