import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogContext from '../../contexts/BlogContext';
import './AdminControls.css';

export default class AdminControls extends Component {
    static contextType = BlogContext

    render() {
        const publishState = (this.props.published) ? 'Unpublish' : 'Publish'
        const editLink = `/edit/${this.props.postIndex}`
        return(
            <>
                <button 
                    onClick={() => this.context.pubPost(this.props.postIndex)}
                >
                    {publishState}
                </button>
                <button 
                    onClick={() => 
                        {if(window.confirm('Delete the item?')){this.context.delPost(this.props.postIndex)};}
                    }
                >
                    Delete
                </button>
                <Link to={editLink}><button>Edit</button></Link>
            </>
        )
    }
}