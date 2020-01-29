import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlogContext from '../../contexts/BlogContext';
import './NavBar.css';

export default withAuth(class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
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
    const { accessToken, setAccessToken } = this.context;
    const isAuthorized = await auth.isAuthenticated();
    const newAccessToken = await auth.getAccessToken();
    if (isAuthorized !== authenticated) {
      this.setState({ authenticated: isAuthorized });
    }
    if (newAccessToken !== accessToken) {
      setAccessToken(newAccessToken);
    }
  }

  async login() {
    const { auth } = this.props;
    auth.login('/');
  }

  async logout() {
    const { auth } = this.props;
    auth.logout('/');
  }

  static contextType = BlogContext

  render() {
    const { authenticated } = this.state;
    const logoutLink = authenticated
      ? (
        <button className="Nav_linksButton" onClick={this.logout} type="button">
          <FontAwesomeIcon size="1x" icon="sign-out-alt" className="Nav_linkIcons" />
        </button>
      )
      : null;

    const adminLink = authenticated
      ? (
        <Link className="Nav_links" to="/admin">
          <FontAwesomeIcon size="1x" icon="user-cog" className="Nav_linkIcons" />
        </Link>
      )
      : null;

    return (
      <div className="App_header">
        <nav role="navigation">
          <h3 className="Nav_logo mobileView">MMD</h3>
          <h3 className="Nav_logo fullView">Make My Day Events</h3>
          <div className="Nav_linksContainer">
            {adminLink}
            <Link className="Nav_links" to="/">
              <FontAwesomeIcon
                size="1x"
                icon="home"
                className="Nav_linkIcons"
              />
            </Link>
            <Link className="Nav_links" to="/our-work">
              <FontAwesomeIcon
                size="1x"
                icon="images"
                className="Nav_linkIcons"
              />
            </Link>
            <Link className="Nav_links" to="/contact">
              <FontAwesomeIcon
                size="1x"
                icon="file-signature"
                className="Nav_linkIcons"
              />
            </Link>
            {logoutLink}
          </div>
        </nav>
      </div>
    );
  }
});
