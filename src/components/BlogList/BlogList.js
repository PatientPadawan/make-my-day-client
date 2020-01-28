import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import BlogEntry from '../BlogEntry/BlogEntry';
import './BlogList.css';

export default withAuth(class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const { auth } = this.props;
    const { authenticated } = this.state;
    const isAuthorized = await auth.isAuthenticated();
    if (isAuthorized !== authenticated) {
      this.setState({ authenticated: isAuthorized });
    }
  }

  render() {
    const blogList = [];
    const { authenticated } = this.state;
    const { entries } = this.props;

    // conditionally rendering unpublished blog posts
    // for authorized admin users
    authenticated ? entries.forEach((_entry, i) => {
      blogList.push(
        <section key={`Blogpost ${entries[i].id}`}>
          <BlogEntry
            entries={entries[i]}
            loggedIn={authenticated}
          />
        </section>,
      );
    }) // if not logged in
      : entries.forEach((_entry, i) => {
        if (entries[i].published === true) {
          blogList.push(
            <section key={`Blogpost ${entries[i].id}`}>
              <BlogEntry
                entries={entries[i]}
                loggedIn={authenticated}
              />
            </section>,
          );
        } else {
          return null;
        }
      });

    return (
      <div>
        {blogList}
      </div>
    );
  }
});
