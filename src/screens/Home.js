import React from 'react';
import Layout from '../components/Layout/';
import {
  Paper,
  Button,
  Select,
  ButtonGroup,
  FormControl,
  InputLabel,
  FormHelperText
} from '@material-ui/core';
import DailyStats from '../components/DailyStats';
import { Add, HistoryRounded } from '@material-ui/icons';
import CircularProgressBar from '../components/ProgressBar/CircularProgressBar';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout title="Home">
        <Paper
          elevation={4}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: 12,
            padding: 20,
            width: '85%'
          }}
        >
          <div>
            <CircularProgressBar
              percentage={65}
              sqSize={200}
              strokeWidth={20}
            />
          </div>

          <DailyStats remaining={1200} target={3000} />

          <ButtonGroup>
            <Button color="primary" size="large" style={{ marginTop: 10 }}>
              <Add /> Add
            </Button>
            <Button size="large" style={{ marginTop: 10 }}>
              <HistoryRounded /> Revert
            </Button>
          </ButtonGroup>
        </Paper>

        <Paper
          elevation={4}
          style={{
            marginTop: 12,
            padding: 20,
            width: '85%'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <h4>Switch Cup</h4>

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
        </Paper>
      </Layout>
    );
  }
}

export default Home;
