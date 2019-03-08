import React from 'react';
import styled from 'styled-components';

const NumberInput = ({setInput, name, min, max, step = "1"}) => {
  function handleChange(e) {
    const value = e.target.value;
    setInput(value);
  }

  return (
    <Container>
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        name={name}
        id={name}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: .5rem 0;
  padding: 0 5px;
`

export default NumberInput;
