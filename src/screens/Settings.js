import React from 'react';
import Layout from '../components/Layout/';
import {
  Paper,
  FormControl,
  FormHelperText,
  Select,
  InputLabel,
  Switch,
  Button,
  Input
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout title="Settings">
        <Paper
          elevation={4}
          style={{
            marginTop: 12,
            padding: 20,
            width: '85%'
          }}
        >
          <h1>Settings</h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <h4>Cup Size</h4>

            <FormControl style={{ marginLeft: 'auto' }}>
              <InputLabel>Amount</InputLabel>
              <Select value={20}>
                <option value={10}>10ml</option>
                <option value={20}>20ml</option>
                <option value={30}>30ml</option>
              </Select>
              <FormHelperText>mls per click</FormHelperText>
            </FormControl>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <h4>Daily Target</h4>

            <FormControl style={{ marginLeft: 'auto' }}>
              <InputLabel>Target</InputLabel>
              <Input type="number" style={{ width: 100 }} />
              <FormHelperText>Type mls</FormHelperText>
            </FormControl>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <h4>Weekly Target</h4>

            <FormControl style={{ marginLeft: 'auto' }}>
              <InputLabel>Target</InputLabel>
              <Input type="number" style={{ width: 100 }} />
              <FormHelperText>Type mls</FormHelperText>
            </FormControl>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <h4>Notifications</h4>

            <FormControl style={{ marginLeft: 'auto' }}>
              <Switch color="primary" />
            </FormControl>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <h4>Reminder Interval</h4>

            <FormControl style={{ marginLeft: 'auto' }}>
              <InputLabel>Amount</InputLabel>
              <Select value={20}>
                <option value={10}>1 hour</option>
                <option value={20}>2 hour</option>
                <option value={30}>3 hour</option>
              </Select>
              <FormHelperText>remind after</FormHelperText>
            </FormControl>
          </div>
        </Paper>
        <Paper
          elevation={4}
          style={{
            marginTop: 12,
            padding: 20,
            width: '85%'
          }}
        >
          <h2>Danger Zone</h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <h4 style={{ marginRight: 'auto' }}>Delete Data</h4>

            <Button style={{ background: '#ff4444', color: 'white' }}>
              <Delete /> Reset
            </Button>
          </div>
        </Paper>
      </Layout>
    );
  }
}

export default Settings;
