/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint "react/react-in-jsx-scope": "off" */
/* eslint "react/jsx-no-undef": "off" */
/* eslint "no-alert": "off" */
/* eslint no-restricted-globals: "off" */
import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
//import Routes from '../src/Routes.jsx';
import Page from '../src/Page.jsx';

const element = (
  <Router>
    <Page />
  </Router>
);
ReactDOM.render(element, document.getElementById('contents'));
