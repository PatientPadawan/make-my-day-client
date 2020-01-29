import React, { Component } from 'react';
import propTypes from 'prop-types';
import OktaSignIn from '@okta/okta-signin-widget/dist/js/okta-sign-in.min';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import './OktaSignInWidget.css';

export default class OktaSignInWidget extends Component {
  componentDidMount() {
    const el = this.node;
    const { baseUrl, onSuccess, onError } = this.props;
    this.widget = new OktaSignIn({
      features: {
        registration: false,
      },
      baseUrl,
      authParams: {
        pkce: true,
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
  baseUrl: propTypes.string.isRequired,
  onSuccess: propTypes.func.isRequired,
  onError: propTypes.func.isRequired,
};
