import React, { Component } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import DATASTORE from '../../DATASTORE'
import BlogEntry from '../../components/BlogEntry/BlogEntry'
import './EditPage.css'


export default class EditPage extends Component {
    handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    }
  
    render() {
        const openPost = DATASTORE.BLOGPOSTS.find(({ index }) => index == this.props.match.params.postIndex);
    
        return(
            <section>
                <BlogEntry entries={openPost} />
                <Editor
                    initialValue={openPost.content}
                    init={{
                        height: 500,
                        menubar: false,
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