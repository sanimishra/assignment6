import React from 'react';
import store from './store.js';
import graphQLFetch from './graphQLFetch.jsx';

export default class About extends React.Component {
  static async fetchData() {
    const data = await graphQLFetch('query {about}');
    return data;
  }

  constructor(props) {
    super(props);
    const apiAbout = store.initialData ? store.initialData.about : null;
    this.state = { apiAbout };
  }

  async componentDidMount() {
    const { apiAbout } = this.state;
    if (apiAbout == null) {
      const data = await About.fetchData();
      this.setState({ apiAbout: data.about });
    }
  }

  render() {
    const { apiAbout } = this.state;
    return (
      <div className="text-center">
        <h3>Product Inventory</h3>
        <p>Testing Server Rendering</p>
        <h4>
          {apiAbout}
        </h4>
      </div>
    );
  }
}
