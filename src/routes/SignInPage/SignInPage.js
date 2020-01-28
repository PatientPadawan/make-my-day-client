import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import OktaSignInWidget from '../../components/OktaSignInWidget/OktaSignInWidget';
import NavBar from '../../components/NavBar/NavBar';

const onError = (err) => {
  console.log('error logging in', err);
};

export default withAuth(class SignInPage extends Component {
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
    const { baseUrl } = this.props;
    if (authenticated === null) return null;
    return (
      <>
        <NavBar />
        {authenticated
          ? <Redirect to={{ pathname: '/' }} />
          : (
            <OktaSignInWidget
              baseUrl={baseUrl}
              onSuccess={this.onSuccess}
              onError={onError}
            />
          )}
      </>
    );
  }
});
