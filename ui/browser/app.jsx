/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint "react/react-in-jsx-scope": "off" */
/* eslint "react/jsx-no-undef": "off" */
/* eslint "no-alert": "off" */
/* eslint no-restricted-globals: "off" */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from '../src/Page.jsx';
import store from '../src/store.js';

// eslint-disable-next-line no-underscore-dangle
store.initialData = window.__INITIAL_DATA__;

const element = (
  <Router>
    <Page />
  </Router>
);
ReactDOM.hydrate(element, document.getElementById('contents'));
