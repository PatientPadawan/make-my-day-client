import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import LandingPage from './routes/LandingPage/LandingPage';
import EventsBlog from './routes/EventsBlog/EventsBlog';
import ContactPage from './routes/ContactPage/ContactPage';
import AdminPage from './routes/AdminPage/AdminPage';
import EditPage from './routes/EditPage/EditPage';
import SignInPage from './routes/SignInPage/SignInPage';
import Footer from './components/Footer/Footer';
import config from './config';
import './App.css';

function customAuthHandler({ history }) {
  history.push('/login');
}

const { issuer, clientId, redirectUri } = config;
const oktaConfig = {
  issuer,
  clientId,
  redirectUri,
  pkce: true,
};

export default function App() {
  return (
    <div className="App">
      <main role="main" className="App_main">
        <Router>
          <Security {...oktaConfig} onAuthRequired={customAuthHandler}>
            <ScrollToTop />
            <Route
              exact
              path="/"
              component={LandingPage}
            />
            <SecureRoute
              path="/admin"
              component={AdminPage}
            />
            <Route
              path="/our-work"
              component={EventsBlog}
            />
            <Route
              path="/contact"
              component={ContactPage}
            />
            <Route
              path="/edit/:postId"
              component={EditPage}
            />
            <Route
              path="/login"
              render={() => <section><SignInPage /></section>}
            />
            <Route
              path="/implicit/callback"
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
