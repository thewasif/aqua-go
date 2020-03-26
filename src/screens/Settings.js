import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout/';
import {
  Paper,
  FormControl,
  FormHelperText,
  Select,
  InputLabel,
  Switch,
  Button,
  Input,
  Typography
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeCup = this.changeCup.bind(this);
    this.changeDailyTarget = this.changeDailyTarget.bind(this);
    this.resetApp = this.resetApp.bind(this);
  }
  changeCup(e) {
    this.props.change(e.target.value);
  }
  changeDailyTarget(e) {
    this.props.changeDailyTarget(Number(e.target.value));
  }
  resetApp() {
    localStorage.clear();
    window.location.reload();
  }
  render() {
    let cup = this.props.cup;
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
          <Typography variant="h5" style={{ textAlign: 'center' }}>
            Settings
          </Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography variant="subtitle">Cup Size</Typography>

            <FormControl style={{ marginLeft: 'auto' }}>
              <InputLabel>Amount</InputLabel>
              <Select defaultValue={cup} onChange={this.changeCup}>
                <option value={250}>250ml</option>
                <option value={300}>300ml</option>
                <option value={350}>350ml</option>
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
            <Typography variant="subtitle">Daily Target</Typography>
            <FormControl style={{ marginLeft: 'auto' }}>
              <InputLabel>Target</InputLabel>
              <Input
                type="number"
                style={{ width: 100 }}
                value={this.props.dailyTarget}
                onChange={this.changeDailyTarget}
              />
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
            <Typography variant="subtitle">Notifications</Typography>
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
            <Typography variant="subtitle">Reminder Interval</Typography>
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
          <Typography variant="h5" style={{ textAlign: 'center' }}>
            Danger Zone
          </Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography style={{ marginRight: 'auto' }} variant="subtitle">
              Delete Data
            </Typography>
            <Button
              style={{ background: '#ff4444', color: 'white' }}
              onClick={this.resetApp}
            >
              <Delete /> Reset
            </Button>
          </div>
        </Paper>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    change: val => dispatch({ type: 'CHANGE', cup: val }),
    changeDailyTarget: val =>
      dispatch({ type: 'SETDAILYTARGET', dailyTarget: val })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
