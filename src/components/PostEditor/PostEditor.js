import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import BlogContext from '../../contexts/BlogContext';
import './PostEditor.css';

export default class PostEditor extends Component {
  constructor(props) {
    super(props);
    const { postToEdit } = this.props;
    this.state = { content: postToEdit.content };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

    handleUpdatePost = (e) => {
      const { content } = this.state;
      const { postToEdit } = this.props;
      const { updateBlogPost, accessToken } = this.context;
      updateBlogPost(postToEdit.id, content, accessToken);
    }

    handleEditorChange(content) {
      this.setState({ content });
    }

    static contextType = BlogContext

    render() {
      const { content } = this.state;
      return (
        <>
          <Editor
            value={content}
            init={{
              height: 500,
              menubar: true,
              forced_root_block: false,
              visualblocks_default_state: true,
              br_in_pe: false,
              plugins: [
                'advlist autolink lists link image charmap print anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code wordcount',
              ],
              toolbar: [
                'undo redo | formatselect | '
                            + 'bold italic backcolor | bullist numlist |'
                            + 'removeformat',
              ],
            }}
            onEditorChange={this.handleEditorChange}
          />
          <button onClick={this.handleUpdatePost} type="button">Update post</button>
        </>
      );
    }
}
