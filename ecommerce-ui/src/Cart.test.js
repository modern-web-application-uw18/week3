import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart'
import App from './App';

it('renders without crashing with empty props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cart />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing with props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cart ={testArticle} type="article" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
