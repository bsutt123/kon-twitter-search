import React from 'react'
import styled from 'styled-components'

const Tweet = ({tweet}) => {
  return (
    <Container>
      <Text>
        {tweet.text}
      </Text>
      <Created> {tweet.created_at} </Created>
      <Name> {tweet.user.screen_name} </Name>
    </Container>
  )
}

const Container = styled.div`
  border: 1px;
  display: grid;
  margin: 1rem auto;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 5px 2px 5px 2px #444444;
  background-color: hsl(187, 73%, 39%);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  grid-template-areas: 
    "text     text    text"
    "created  ....    name";
`

const Text = styled.div`
  grid-area: text;
`

const Created = styled.div`
  grid-area: created;
`

const Name = styled.div`
  grid-area: name;
  justify-self: end;
`
export default Tweet;
