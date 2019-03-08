//@format

import React from 'react';
import styled from 'styled-components';

import NumberInput from './NumberInput';

const LocationInput = ({location, locationSetter}) => {
  const step = '0.0001';
  const {setLat, setLong, setRadius} = locationSetter;
  const {lat, long, radius} = location;
  return (
    <Container>
      <Item>
        <Label> Latitude </Label>
        <NumberInput
          val={lat}
          setInput={setLat}
          min="-90"
          max="90"
          step={step}
        />
      </Item>
      <Item>
        <Label> Longitude</Label>
        <NumberInput
          val={long}
          setInput={setLong}
          min="-90"
          max="90"
          step={step}
        />
      </Item>
      <Item>
        <Label> Radius </Label>
        <NumberInput
          setInput={setRadius}
          min="0"
          max="100"
          step="0.01"
          val={radius}
        />
      </Item>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled.div`
  margin: 0.5rem;
`;

const Label = styled.div`
  font-size: 0.75rem;
`;
export default LocationInput;
