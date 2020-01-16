import React, { Component } from 'react';
import Moment from 'react-moment';
import dompurify from 'dompurify';
import parse, { domToReact } from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminControls from '../AdminControls/AdminControls';
import { H1Component, HeaderComponent, ImageComponent, ContentComponent } from '../HtmlComponents';
import './BlogEntry.css';

export default class BlogEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
        };
        this.onDelete = this.onDelete.bind(this);
        this.toggleHiddenClass = this.toggleHiddenClass.bind(this);
        this.optionsReplace = this.optionsReplace.bind(this);
    }

    onDelete() {
        this.setState({ collapsed: true })
    }

    toggleHiddenClass() {
        const currentCollapseState = this.state.collapsed;
        this.setState({ collapsed: !currentCollapseState });
    }

    optionsReplace({ name, children, attribs }) {
        if (!name) return;
        const remainingHeaderTags = ['h2', 'h3', 'h4', 'h5', 'h6']
        const availableContentTags = ['a', 'p']
        // expand collapse icon logic
        const iconToRender = this.state.collapsed ?
        <FontAwesomeIcon size='2x' icon='plus' className='Entry_icons'/> :
        <FontAwesomeIcon size='2x' icon='minus' className='Entry_icons'/> ;

        if(name === 'h1') {
            return( 
                <H1Component
                    {...this.props}
                    children={domToReact(children, this.optionsReplace)}
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
                    children={domToReact(children, this.optionsReplace)}
                    collapsed={this.state.collapsed}
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
                    children={domToReact(children, this.optionsReplace)} // REFACTOR OTHER TAGS
                    collapsed={this.state.collapsed}
                    optionsReplace={this.optionsReplace}
                />
            )
        }
    }
    
    render() {
        const dateToFormat = this.props.entries.createdAt

        const adminControls = this.props.loggedIn ?
            <AdminControls 
                postId={this.props.entries.id} 
                published={this.props.entries.published}
                onDelete={() => this.onDelete()}
            /> :
            null
        ;

        const sanitizer = dompurify.sanitize
        const cleanHtml = sanitizer(this.props.entries.content)
        // html ---> react parser logic
        const options = { replace: this.optionsReplace }
        const reactFromHtml = parse(cleanHtml, options)

        return(
            <div className='Landing_underline Landing_underlineCenter'>
                {reactFromHtml}
                <div className='Entry_dateContainer'>
                    <Moment 
                        className={this.state.collapsed ? 'Entry_date': 'Entry_contentCollapseContainer'} 
                        format='MMMM Do, YYYY'
                    >
                        {dateToFormat}
                    </Moment>
                </div>
                <div className={this.state.collapsed ? 'Entry_contentCollapseContainer': null}>
                    {adminControls}
                </div>
            </div>
        )
    }
}