import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PostEditor from './PostEditor';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const postToEdit = {
    id: '',
    content: '',
    createdAt: '',
    updatedAt: '',
  };
  ReactDOM.render(
    <BrowserRouter>
      <PostEditor postToEdit={postToEdit} />
    </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
