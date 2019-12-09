import React, { Component } from 'react'
import Moment from 'react-moment'
import AdminControls from '../AdminControls/AdminControls'
import './BlogEntry.css'

export default class BlogEntry extends Component {
    render() {
        const dateToFormat = this.props.entries.dateCreated
        return(
            <>
                <h3 className='Entry_title'>{this.props.entries.title}</h3>
                <Moment className='Entry_date' format='MMMM Do, YYYY'>{dateToFormat}</Moment>
                <img crossOrigin='anonymous' src={this.props.entries.image} alt='DJ services' className='Entry_images'/>
                <div dangerouslySetInnerHTML={{__html: this.props.entries.content}} className='Entry_content'></div>
                <AdminControls postId={this.props.entries.index} published={this.props.entries.published}/>
            </>
        )
    }
}