// @format

import React from 'react';
import styled from 'styled-components';

const Error = ({codes}) => {
  return <Container> {getErrorLabel(codes)} </Container>;
};

function getErrorLabel(codes) {
  const errorMessages = codes.map(code => code.message);
  return errorMessages.join(' ');
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  padding: 0 0.5rem;
`;
export default Error;
