import React, { Component } from 'react';
import BlogEntry from '../BlogEntry/BlogEntry';
import { withAuth } from '@okta/okta-react';
import './BlogList.css';

export default withAuth(class BlogList extends Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: null };
    }

    async checkAuthentication() {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    async componentDidMount() {
        this.checkAuthentication();
    }

    async componentDidUpdate() {
        this.checkAuthentication();
    }

    render() {
        const blogList = [];
        {this.props.entries.forEach((entry, i) => {
            blogList.push(<section><BlogEntry key={i} entries={this.props.entries[i]} loggedIn={this.state.authenticated}/></section>)
        })}

        return(
            <>
                {blogList}
            </>
        )
    }
})