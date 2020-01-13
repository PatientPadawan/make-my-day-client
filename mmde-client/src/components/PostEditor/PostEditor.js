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
        this.context.updateBlogPost(this.props.postToEdit.id, this.state.content, this.context.accessToken)
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
                        visualblocks_default_state: true,
                        br_in_pe: false,
                        plugins: [
                            'advlist autolink lists link image charmap print anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code wordcount'
                        ],
                        toolbar: [
                            'undo redo | formatselect | ' +
                            'bold italic backcolor | bullist numlist |' +
                            'removeformat'
                        ]
                    }}
                    onEditorChange={this.handleEditorChange}
                />
                <button onClick={this.handleUpdatePost}>Update post</button>
            </>
        )
    }
}