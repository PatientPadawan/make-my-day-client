import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import propTypes from 'prop-types';
import OktaSignInWidget from '../../components/OktaSignInWidget/OktaSignInWidget';
import NavBar from '../../components/NavBar/NavBar';

const onError = (err) => {
  console.log('error logging in', err);
};

export default withAuth(class SignInPage extends Component {
  static propTypes = {
    auth: propTypes.shape({
      oktaAuth: propTypes.object,
      config: propTypes.object,
      history: propTypes.object,
      handleAuthentication: propTypes.func,
      isAuthenticated: propTypes.func,
      getUser: propTypes.func,
      getIdToken: propTypes.func,
      getAccessToken: propTypes.func,
      login: propTypes.func,
      logout: propTypes.func,
      redirect: propTypes.func,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
    this.state = {
      authenticated: null,
    };
    this.checkAuthentication();
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  onSuccess(res) {
    const { auth } = this.props;
    if (res.status === 'SUCCESS') {
      return auth.redirect({
        sessionToken: res.session.token,
      });
    }
    return null;
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
    const { authenticated } = this.state;
    if (authenticated === null) return null;
    return (
      <>
        <NavBar />
        {authenticated
          ? <Redirect to={{ pathname: '/' }} />
          : (
            <OktaSignInWidget
              onSuccess={this.onSuccess}
              onError={onError}
            />
          )}
      </>
    );
  }
});
