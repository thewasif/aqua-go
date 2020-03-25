import React from 'react';
import styled from 'styled-components';

function DailyStats(props) {
  const { remaining, target } = props;
  return (
    <Container>
      <Div>
        <Small>Remaining</Small>
        <h5>{remaining}ml</h5>
      </Div>
      <Div>
        <Small>Target</Small>
        <h5>{target}ml</h5>
      </Div>
    </Container>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Small = styled.small`
  color: #333;
  opacity: 0.7;
  position: relative;
  top: 14px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default DailyStats;
