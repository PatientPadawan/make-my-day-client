import React, { Component } from 'react';
import Moment from 'react-moment';
import dompurify from 'dompurify';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminControls from '../AdminControls/AdminControls';
import './BlogEntry.css';

export default class BlogEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
        };

        this.toggleHiddenClass = this.toggleHiddenClass.bind(this);
    }

    toggleHiddenClass() {
        const currentCollapseState = this.state.collapsed;
        this.setState({ collapsed: !currentCollapseState });
    }
    
    render() {
        // client side XSS cleaning before rendering elements from html
        const sanitizer = dompurify.sanitize
        const dateToFormat = this.props.entries.dateCreated
        // conditionally rendering the admin controls
        const adminControls = this.props.loggedIn ?
        <AdminControls postId={this.props.entries.index} published={this.props.entries.published}/> :
        null;
        // expand collapse icon logic
        const iconToRender = this.state.collapsed ?
        <FontAwesomeIcon size='2x' icon='plus' className='Entry_icons'/> :
        <FontAwesomeIcon size='2x' icon='minus' className='Entry_icons'/>;

        console.log(parse(this.props.entries.content))


        return(
            <>
                <div className='Entry_titleContainer'>
                    <h3 className='Entry_title'>{this.props.entries.title}</h3>
                    <button onClick={this.toggleHiddenClass} className='Entry_button' aria-expanded={!this.state.collapsed}>
                        {iconToRender}
                    </button>
                </div>
                <div className={this.state.collapsed ? 'Entry_contentCollapseContainer': null}>
                    <img crossOrigin='anonymous' src={this.props.entries.image} alt='DJ services' className='Entry_images'/>
                    <div dangerouslySetInnerHTML={{__html: sanitizer(this.props.entries.content)}} className='Entry_content'></div>
                    {adminControls}
                </div>
                <div className='Entry_dateContainer'>
                    <Moment className={this.state.collapsed ? 'Entry_date': 'Entry_contentCollapseContainer'} format='MMMM Do, YYYY'>{dateToFormat}</Moment>
                </div>
            </>
        )
    }
}