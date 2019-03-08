// @format

import React from 'react';

import LocationInput from './form-inputs/LocationInput';
import Grid from './styled/flex/Grid';
import Block from './styled/flex/Block';
import Label from './styled/form/Label';

const LocationGrid = ({locationSetter, location}) => {
  return (
    <Grid>
      <Block>
        <Label> Geo Location </Label>
        <LocationInput
          locationSetter={locationSetter}
          location={location}
          name="location"
        />
      </Block>
    </Grid>
  );
};

export default LocationGrid;
