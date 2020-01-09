import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import LandingPage from '../../routes/LandingPage/LandingPage';
import EventsBlog from '../../routes/EventsBlog/EventsBlog';
import ContactPage from '../../routes/ContactPage/ContactPage';
import AdminPage from '../../routes/AdminPage/AdminPage';
import EditPage from '../../routes/EditPage/EditPage';
import SignInPage from '../../routes/SignInPage/SignInPage';
import Footer from '../Footer/Footer';
import './App.css';


function onAuthRequired({history}) {
  history.push('/login');
}

const oktaConfig = {
  issuer:`https://${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/default`,
  clientId: `${process.env.REACT_APP_OKTA_ID}`,
  redirectUri: window.location.origin + '/implicit/callback',
  onAuthRequired: onAuthRequired,
  pkce: true,
}

export default class App extends Component {
  render() {
    return(
      <div className='App'>
        <main role='main' className='App_main'>
          <Router>
            <Security {...oktaConfig}>
              <Route
                exact
                path={'/'}
                component={LandingPage}
              />
              <SecureRoute
                path={'/admin'}
                component={AdminPage}
              />
              <Route
                path={'/our-work'}
                component={EventsBlog}
              />
              <Route 
                path={'/contact'}
                component={ContactPage}
              />
              <Route
                path={`/edit/:postId`}
                component={EditPage}
              />
              <Route
                path={`/login`}
                render={() => <section><SignInPage baseUrl={`https://${process.env.REACT_APP_OKTA_DOMAIN}`}/></section>}
              />
              <Route 
                path={`/implicit/callback`}
                component={ImplicitCallback}
              />
              </Security>
          </Router>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}