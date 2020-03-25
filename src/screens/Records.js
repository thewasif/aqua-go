import React from 'react';
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

function Records() {
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
        <h1>Records</h1>
        <TableContainer>
          <TableHead>
            <TableRow>
              <TableCell>Days</TableCell>
              <TableCell>Target</TableCell>
              <TableCell>Target Acheived</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Monday</TableCell>
              <TableCell>3000ml</TableCell>
              <TableCell>2500ml</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Monday</TableCell>
              <TableCell>3000ml</TableCell>
              <TableCell>2500ml</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Monday</TableCell>
              <TableCell>3000ml</TableCell>
              <TableCell>2500ml</TableCell>
            </TableRow>
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
        <Typography variant="h4">Stats</Typography>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <Typography variant="subtitle2">Daily Target</Typography>
          <LinearProgress
            color="primary"
            valueBuffer={100}
            value={20}
            variant="buffer"
          />
        </div>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <Typography variant="subtitle2">Weekly Target Target</Typography>
          <LinearProgress
            color="primary"
            valueBuffer={100}
            value={20}
            variant="buffer"
          />
        </div>
      </Paper>
    </Layout>
  );
}

export default Records;
