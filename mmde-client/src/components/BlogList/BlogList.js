import React, { Component } from 'react'
import BlogEntry from '../BlogEntry/BlogEntry'
import './BlogList.css'

export default class BlogList extends Component {
    render() {
        const blogList = [];
        {this.props.entries.forEach((entry, i) => {
            blogList.push(<section><BlogEntry key={i} entries={this.props.entries[i]}/></section>)
        })}

        return(
            <>
                {blogList}
            </>
        )
    }
}