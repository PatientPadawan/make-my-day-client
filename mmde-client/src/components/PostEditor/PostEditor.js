import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import BlogContext from '../../contexts/BlogContext';
import './PostEditor.css';

export default class PostEditor extends Component {
    static contextType = BlogContext

    handleEditorChange = (e) => {
        this.context.updateBlogPost(this.props.postToEdit.index, e.target.getContent());
    }

    render() {
        return(
            <Editor
                    initialValue={this.props.postToEdit.content}
                    init={{
                        height: 500,
                        menubar: true,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
                        }
                    }
                    onChange={this.handleEditorChange}
            />
        )
    }
}