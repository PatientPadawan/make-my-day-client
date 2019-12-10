import React, { Component } from 'react'
import Moment from 'react-moment'
import AdminControls from '../AdminControls/AdminControls'
import './BlogEntry.css'

export default class BlogEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
        };

        this.toggleHiddenClass = this.toggleHiddenClass.bind(this);
    }

    toggleHiddenClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }
    
    render() {
        const dateToFormat = this.props.entries.dateCreated
        return(
            <>
                <h3 className='Entry_title'><button onClick={this.toggleHiddenClass} aria-expanded="false">{this.props.entries.title}</button></h3>
                <Moment className='Entry_date' format='MMMM Do, YYYY'>{dateToFormat}</Moment>
                <div className={this.state.active ? 'Entry_contentCollapseContainer': null}>
                    <img crossOrigin='anonymous' src={this.props.entries.image} alt='DJ services' className='Entry_images'/>
                    <div dangerouslySetInnerHTML={{__html: this.props.entries.content}} className='Entry_content'></div>
                    <AdminControls postId={this.props.entries.index} published={this.props.entries.published}/>
                </div>
            </>
        )
    }
}