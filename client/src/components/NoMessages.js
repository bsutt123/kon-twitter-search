// @format

import React from 'react';
import styled from 'styled-components';

const NoMessages = props => {
  return <Container> There are no messages to display. </Container>;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  padding: 0 0.5rem;
`;
export default NoMessages;
