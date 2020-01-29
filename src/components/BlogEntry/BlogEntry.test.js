import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import BlogEntry from './BlogEntry';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <BlogEntry
        entries={'<h1>Best Blog Ever</h1><img src=\'https://i.imgur.com/uIdYsLu.jpg\' alt=\'DJ placeholder\' width=\'200px\'/> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi blandit cursus. Interdum varius sit amet mattis. Lectus arcu bibendum at varius. Aliquet porttitor lacus luctus accumsan.</p>'}
        loggedIn={false}
      />
    </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
