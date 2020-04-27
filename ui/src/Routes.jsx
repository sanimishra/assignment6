/* eslint-disable import/extensions */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductList from './ProductList.jsx';
import ProductEdit from './ProductEdit.jsx';
import ProductImage from './ProductImage.jsx';
import About from './About.jsx';

const NotFound = () => <h1>Page Not Found</h1>;
export default function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/products" />
      <Route path="/products" component={ProductList} />
      <Route path="/edit/:id" component={ProductEdit} />
      <Route path="/viewimage/:id" component={ProductImage} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}
