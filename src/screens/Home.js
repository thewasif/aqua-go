import React from 'react';
import Layout from '../components/Layout/';
import {
  Paper,
  Button,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  Grid
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
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
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper>xs=12</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>xs=6</Paper>
            </Grid>
          </Grid>

          <Button color="primary" size="large" style={{ marginTop: 10 }}>
            <Add /> Add
          </Button>
        </Paper>
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div style={{ marginRight: 'auto' }}>
              <h4>Amount of Water</h4>
            </div>

            <FormControl>
              <InputLabel>Amount</InputLabel>
              <Select>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
              </Select>
              <FormHelperText>mls added per click</FormHelperText>
            </FormControl>
          </div>
        </Paper>
      </Layout>
    );
  }
}

export default Home;
