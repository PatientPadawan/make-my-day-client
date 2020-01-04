import React, { Component } from 'react';
import Moment from 'react-moment';
import dompurify from 'dompurify';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminControls from '../AdminControls/AdminControls';
import './BlogEntry.css';
import { H1Component, HeaderComponent, ImageComponent, ContentComponent } from '../HtmlComponents';

export default class BlogEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
        };

        this.toggleHiddenClass = this.toggleHiddenClass.bind(this);
        this.optionsReplace = this.optionsReplace.bind(this);
    }

    toggleHiddenClass() {
        const currentCollapseState = this.state.collapsed;
        this.setState({ collapsed: !currentCollapseState });
    }

    optionsReplace({ name, children, attribs }) {
        const remainingHeaderTags = ['h2', 'h3', 'h4', 'h5', 'h6']
        const availableContentTags = ['a', 'p']
        // conditionally rendering admin controls
        const adminControls = this.props.loggedIn ?
        <AdminControls postIndex={this.props.entries.index} published={this.props.entries.published}/> :
        null;
        // expand collapse icon logic
        const iconToRender = this.state.collapsed ?
        <FontAwesomeIcon size='2x' icon='plus' className='Entry_icons'/> :
        <FontAwesomeIcon size='2x' icon='minus' className='Entry_icons'/> ;

        if(name === 'h1') {
            return( 
                <H1Component
                    {...this.props}
                    children={children}
                    collapsed={this.state.collapsed}
                    toggleHiddenClass={this.toggleHiddenClass}
                    iconToRender={iconToRender}
                />
            )
        }

        if (remainingHeaderTags.includes(name)) {
            return(
                <HeaderComponent 
                    {...this.props}
                    children={children}
                    collapsed={this.state.collapsed}
                    adminControls={adminControls}
                />
            )
        }
        
        if (name === 'img') {
            return(
                <ImageComponent
                    {...this.props}
                    attribs={attribs}
                    collapsed={this.state.collapsed}
                />
            )
        }

        if (availableContentTags.includes(name)) {
            return(
                <ContentComponent
                    {...this.props}
                    children={children}
                    collapsed={this.state.collapsed}
                    adminControls={adminControls}
                />
            )
        }
    }
    
    render() {
        const dateToFormat = this.props.entries.dateCreated
        // prepping for client side XSS cleaning before rendering elements from html
        const sanitizer = dompurify.sanitize
        // html ---> react parser logic
        const cleanHtml = sanitizer(this.props.entries.content)
        const options = { replace: this.optionsReplace }
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