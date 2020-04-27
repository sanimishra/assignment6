import React from 'react';
import graphQLFetch from './graphQLFetch.js';

export default class ProductImage extends React.Component {
  constructor() {
    super();
    this.state = {
      productinfo: {},
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { match: { params: { id } } } = this.props;
    const query = `query products($id: Int!) {
      products(id: $id) {
        id category name price image
      }
    }`;
    const data = await graphQLFetch(query, { id });
    if (data) {
      this.setState({ productinfo: data.products });
    }
  }

  render() {
    const { productinfo: { image, name } } = this.state;
    return (
      <div>
        <h3>Image Of the Product</h3>
        <h1>{name}</h1>
        <img src={image} alt={name} style={{ width: 500 }} />
      </div>
    );
  }
}
