import React, { Component } from 'react';
import propTypes from 'prop-types';
import OktaSignIn from '@okta/okta-signin-widget/dist/js/okta-sign-in.min';
import config from '../../config';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import './OktaSignInWidget.css';

export default class OktaSignInWidget extends Component {
  componentDidMount() {
    const el = this.node;
    const { onSuccess, onError } = this.props;
    const { issuer, clientId, redirectUri } = config;

    this.widget = new OktaSignIn({
      features: {
        registration: false,
      },
      baseUrl: issuer.split('/oauth2')[0],
      clientId,
      redirectUri,
      authParams: {
        pkce: true,
        issuer,
      },
    });
    this.widget.renderEl({ el }, onSuccess, onError);
  }

  componentWillUnmount() {
    this.widget.remove();
  }

  render() {
    return <div ref={(node) => { this.node = node; }} className="signInWidget" />;
  }
}

OktaSignInWidget.propTypes = {
  onSuccess: propTypes.func.isRequired,
  onError: propTypes.func.isRequired,
};
