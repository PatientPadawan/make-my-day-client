import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import BlogContext from '../../contexts/BlogContext';
import './PostEditor.css';

export default class PostEditor extends Component {
    static contextType = BlogContext
    constructor(props) {
        super(props);

        this.state = { content: this.props.postToEdit.content };
        this.handleEditorChange = this.handleEditorChange.bind(this)
    }

    handleEditorChange(content) {
        this.setState({ content });
    }

    handleUpdatePost = (e) => {
        this.context.updateBlogPost(this.props.postToEdit.index, this.state.content)
    }

    render() {
        return(
            <>
                <Editor
                    value={this.state.content}
                    init={{
                        height: 500,
                        menubar: true,
                        forced_root_block: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
                        }
                    }
                    onEditorChange={this.handleEditorChange}
                />
                <button onClick={this.handleUpdatePost}>Update post</button>
            </>
        )
    }
}