// @format

import React, {useState} from 'react';
import styled from 'styled-components';

const TextInput = ({setInput, name}) => {
  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <Container>
      <input type="text" onChange={handleChange} name={name} id={name} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
`;

export default TextInput;
