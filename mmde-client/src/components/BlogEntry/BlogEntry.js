import React, { Component } from 'react';
import Moment from 'react-moment';
import dompurify from 'dompurify';
import parse from 'html-react-parser';
import domToReact from 'html-react-parser';
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
        const dateToFormat = this.props.entries.dateCreated

        // prepping for client side XSS cleaning before rendering elements from html
        const sanitizer = dompurify.sanitize

        // conditionally rendering admin controls
        const adminControls = this.props.loggedIn ?
        <AdminControls postId={this.props.entries.index} published={this.props.entries.published}/> :
        null;

        // expand collapse icon logic
        const iconToRender = this.state.collapsed ?
        <FontAwesomeIcon size='2x' icon='plus' className='Entry_icons'/> :
        <FontAwesomeIcon size='2x' icon='minus' className='Entry_icons'/>;

        // html ---> react parser logic
        const questionableHtml = this.props.entries.content
        const cleanHtml = sanitizer(questionableHtml)
        const availableHeaderTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
        const availableContentTags = ['a', 'p']
        const options = {
            replace: ({ name, children, attribs }) => {
                if (availableHeaderTags.indexOf(name) !== -1) {
                    return(
                        <div className='Entry_titleContainer'>
                            <h3 className='Entry_title'>
                                {domToReact(children[0].data, options)}
                            </h3>
                            <button 
                                onClick={this.toggleHiddenClass} 
                                className='Entry_button' 
                                aria-expanded={!this.state.collapsed}
                            >
                                {iconToRender}
                            </button>
                        </div>
                    )
                }
                
                if (name === 'img') {
                    return(
                        <div className={this.state.collapsed ? 'Entry_contentCollapseContainer': null}>
                            <img 
                                crossOrigin='anonymous' 
                                src={attribs.src} 
                                alt={attribs.alt} 
                                className='Entry_images' 
                            />
                        </div>
                    )
                }

                if (availableContentTags.indexOf(name) !== -1) {
                    return(
                        <div className={this.state.collapsed ? 'Entry_contentCollapseContainer': null}>
                            <div className='Entry_content'>
                                {domToReact(children[0].data, options)}
                            </div>
                            {adminControls}
                        </div>
                    )
                }
            }
        }
        
        const reactFromHtml = parse(cleanHtml, options)

        return(
            <>
                <div>
                    {reactFromHtml}
                    <div className='Entry_dateContainer'>
                        <Moment 
                            className={this.state.collapsed ? 'Entry_date': 'Entry_contentCollapseContainer'} 
                            format='MMMM Do, YYYY'
                        >
                            {dateToFormat}
                        </Moment>
                    </div>
                </div>
            </>
        )
    }
}