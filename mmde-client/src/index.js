import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCog, faHome, faSignInAlt, faFileSignature, faImages, faPlusSquare, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { BlogContextProvider } from './contexts/BlogContext';
import { BlogEntryProvider } from './contexts/BlogEntryContext';
import App from './components/App/App';
import './index.css';

library.add(
    faUserCog, // admin button
    faHome, // home button
    faImages, // our work button
    faFileSignature, // contact us button
    faSignInAlt, // sign in button
    faPlusSquare, // add new post button
    faCopyright,
    faFacebookSquare, // facebook social media link
)

ReactDOM.render(
    <BrowserRouter>
        <BlogContextProvider>
            <BlogEntryProvider>
                <App />
            </BlogEntryProvider>
        </BlogContextProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
