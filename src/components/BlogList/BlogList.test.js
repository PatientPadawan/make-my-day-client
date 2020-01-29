import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import BlogList from './BlogList'; 

it('renders without crashing', () => {
  const div = document.createElement('div');
  const entries = [
    {
      id: 0,
      content: '<h1>Hi there</h1>',
      createdAt: '12:00pm',
    },
  ];
  ReactDOM.render(
    <BrowserRouter>
      <BlogList
        entries={entries}
        loggedIn={false}
      />
    </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
