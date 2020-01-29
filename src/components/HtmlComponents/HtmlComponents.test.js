import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { 
  H1Component, HeaderComponent, ImageComponent, ContentComponent 
} from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const attribs = {
    src: '',
    atl: '',
  };
  ReactDOM.render(
    <BrowserRouter>
      <H1Component />
      <HeaderComponent />
      <ImageComponent attribs={attribs}/>
      <ContentComponent />
    </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
