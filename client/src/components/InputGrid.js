// @format

import React from 'react';

import TextInput from './form-inputs/TextInput';
import NumberInput from './form-inputs/NumberInput';

import Grid from './styled/flex/Grid';
import Block from './styled/flex/Block';
import Label from './styled/form/Label';

const InputGrid = ({setUser, setTerm, setNumberOfTweets, numberOfTweets}) => {
  return (
    <Grid>
      <Block>
        <Label> User </Label>
        <TextInput setInput={setUser} name="user" />
      </Block>
      <Block>
        <Label> Search Term </Label>
        <TextInput setInput={setTerm} name="term" />
      </Block>
      <Block>
        <Label> Number of Tweets </Label>
        <NumberInput
          setInput={setNumberOfTweets}
          min="1"
          max="100"
          step="1"
          name="number"
          val={numberOfTweets}
        />
      </Block>
    </Grid>
  );
};

export default InputGrid;
