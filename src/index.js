import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserCog, faHome, faSyncAlt, faSignInAlt, faSignOutAlt, faFileSignature, faImages, faPlusSquare, faCopyright, faPlus, faMinus, faGrinAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { BlogContextProvider } from './contexts/BlogContext';
import App from './components/App/App';
import './index.css';

library.add(
  faGrinAlt, // company logo
  faSyncAlt, // loading screen spinner
  faUserCog, // admin button
  faHome, // home button
  faImages, // our work button
  faFileSignature, // contact us button
  faSignInAlt, // sign in button
  faSignOutAlt, // sign out button
  faPlusSquare, // add new post button
  faCopyright,
  faFacebookSquare, // facebook social media link
  faPlus, // section expand button
  faMinus, // section collapse button
);

ReactDOM.render(
  <BrowserRouter>
    <BlogContextProvider>
      <App />
    </BlogContextProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
