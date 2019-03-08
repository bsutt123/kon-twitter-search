//@format

import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import './App.css';

import Tweet from './components/Tweet';
import NoMessages from './components/NoMessages';
import Error from './components/Error';
import InputGrid from './components/InputGrid';
import LocationGrid from './components/LocationGrid';

const App = () => {
  //setup state management at the application level
  const [user, setUser] = useState('');
  const [term, setTerm] = useState('');
  const [numberOfTweets, setNumberOfTweets] = useState(15);
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [radius, setRadius] = useState(1);
  const [tweets, setTweets] = useState([]);
  const [errored, setErrored] = useState(false);
  const [errors, setErrors] = useState([]);

  //create objects to pass location information together
  const locationSetter = {
    setLat,
    setLong,
    setRadius,
  };

  const location = {
    lat,
    long,
    radius,
  };

  async function getTweets(e) {
    e.preventDefault();
    //create location string
    let location = '';
    if (lat && long && radius) {
      location = convertGeocode(lat, long, radius);
    }

    const params = {
      user,
      term,
      location,
      numberOfTweets,
    };

    Object.keys(params).forEach(key => {
      if (!params[key] || params[key] === 0) {
        delete params[key];
      }
    });

    let tweets;
    if (params.user) {
      tweets = await axios.get('/tweets/user', {params});
    } else {
      tweets = await axios.get('/tweets/search', {params});
    }

    tweets = tweets.data;
    if (tweets.errors) {
      setErrored(true);
      setErrors(tweets.errors);
    } else {
      setErrored(false);
      setTweets(tweets);
    }
  }

  return (
    <AppContainer>
      <Container>
        <form onSubmit={getTweets}>
          <InputGrid
            setUser={setUser}
            setTerm={setTerm}
            setNumberOfTweets={setNumberOfTweets}
            numberOfTweets={numberOfTweets}
          />
          {!user && (
            <LocationGrid location={location} locationSetter={locationSetter} />
          )}
          <Center>
            <input type="submit" value="Submit" />
          </Center>
        </form>
        <div>{errored ? getErrorComponent(errors) : getTweetList(tweets)}</div>
      </Container>
    </AppContainer>
  );
};

const Container = styled.div`
  padding: 1rem auto;
  max-width: 900px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: auto;
`;
const Center = styled.div`
  text-align: center;
`;

function getErrorComponent(codes) {
  return <Error codes={codes} />;
}

function getTweetList(tweets) {
  if (tweets.length === 0) {
    return <NoMessages />;
  } else {
    return tweets.map((tweet, index) => {
      return <Tweet key={index} tweet={tweet} />;
    });
  }
}

function convertGeocode(lat, long, radius) {
  return `${lat},${long},${radius}mi`;
}

export default App;
