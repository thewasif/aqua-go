import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout/';
import {
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  LinearProgress,
  Typography
} from '@material-ui/core';

function Records(props) {
  const data = JSON.parse(localStorage.getItem('WEEKLY_STATS')) || [];
  let dailyTarget = props.dailyTarget;
  let achievedTarget = props.achievedTarget;
  let percentage = Math.floor((achievedTarget / dailyTarget) * 100);
  return (
    <Layout title="Records">
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
        <Typography variant="h5" style={{ textAlign: 'center' }}>
          Records
        </Typography>
        <TableContainer>
          <TableHead>
            <TableRow>
              <TableCell>Days</TableCell>
              <TableCell>Target</TableCell>
              <TableCell>Target Acheived</TableCell>
              <TableCell>Success Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(e => (
              <React.Fragment>
                <TableRow>
                  <TableCell>
                    <b>{e.day}</b>
                  </TableCell>
                  <TableCell>{e.dailyTarget}</TableCell>
                  <TableCell>{e.achievedTarget}</TableCell>
                  <TableCell>
                    {Math.floor((e.achievedTarget / e.dailyTarget) * 100)}%
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </TableContainer>
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
          Stats
        </Typography>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <Typography variant="subtitle2">Daily Target</Typography>
          <LinearProgress
            color="primary"
            valueBuffer={100}
            value={percentage}
            variant="buffer"
          />
        </div>
      </Paper>
    </Layout>
  );
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Records);
