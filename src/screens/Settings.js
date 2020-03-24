import React from 'react';
import Layout from '../components/Layout/';
class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout title="Settings">
        <h1>Settings</h1>
      </Layout>
    );
  }
}

export default Settings;
