import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import LandingPage from '../../routes/LandingPage/LandingPage'
import EventsBlog from '../../routes/EventsBlog/EventsBlog'
import ContactPage from '../../routes/ContactPage/ContactPage'
import AdminPage from '../../routes/AdminPage/AdminPage'
import EditPage from '../../routes/EditPage/EditPage'
import Footer from '../Footer/Footer'
import './App.css'



export default class App extends Component {
  render() {
    return(
      <div className='App'>
        <header className='App_header'> 
          <NavBar />
        </header>
        <main role='main' className='App_main'>
          <Hero />
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route
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
              path={`/edit/:postIndex`}
              component={EditPage}
            />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}