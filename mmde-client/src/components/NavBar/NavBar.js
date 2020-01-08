import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlogContext from '../../contexts/BlogContext';
import './NavBar.css';

export default withAuth(class NavBar extends Component {
    static contextType = BlogContext

    constructor(props) {
        super(props);
        this.state = { authenticated: null };
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    async checkAuthentication() {
        const authenticated = await this.props.auth.isAuthenticated();
        const accessToken = await this.props.auth.getAccessToken();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
        if (accessToken !== this.context.accessToken) {
            this.context.setAccessToken(accessToken)
        }
    }

    async componentDidMount() {
        this.checkAuthentication();
    }

    async componentDidUpdate() {
        this.checkAuthentication();
    }

    async login() {
        this.props.auth.login('/');
    }

    async logout() {
        this.props.auth.logout('/');
    }

    render() {
        const logoutLink = this.state.authenticated ?
        <button className='Nav_linksButton' onClick={this.logout}><FontAwesomeIcon size='1x' icon='sign-out-alt' className='Nav_linkIcons'/></button> :
        null ;

        const adminLink = this.state.authenticated ?
        <Link className='Nav_links' to='/admin'><FontAwesomeIcon size='1x' icon='user-cog' className='Nav_linkIcons'/></Link> :
        null ;
    
        return(
            <header className='App_header'>
                <nav role='navigation'>
                    <h3 id='Nav_logo'>
                        <FontAwesomeIcon
                            size='1x'
                            icon='grin-alt'
                            className='Nav_linkIcons'
                        />
                    </h3>
                    <div className='Nav_linksContainer'>
                        {adminLink}
                        <Link className='Nav_links' to='/'>
                            <FontAwesomeIcon
                                size='1x'
                                icon='home'
                                className='Nav_linkIcons'
                            />
                        </Link>
                        <Link className='Nav_links' to='/our-work'>
                            <FontAwesomeIcon
                                size='1x'
                                icon='images'
                                className='Nav_linkIcons'
                            />
                        </Link>
                        <Link className='Nav_links' to='/contact'>
                            <FontAwesomeIcon
                                size='1x'
                                icon='file-signature'
                                className='Nav_linkIcons'
                            />
                        </Link>
                        {logoutLink}
                    </div>
            </nav>
        </header>
        )
    }
})