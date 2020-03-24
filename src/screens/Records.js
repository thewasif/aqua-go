import React from 'react';
import Layout from '../components/Layout/';
class Records extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout title="Records">
        <h1>Records</h1>
      </Layout>
    );
  }
}

export default Records;
