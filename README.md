# Twitter Search Application

This application can be used to search through recent tweets using the Twitter API. I chose to make this application because I wanted a chance to get to build something using Twitter API, which can be a powerful tool to include in applications to enhance user interaction. Additionally, displaying large numbers of tweets and managing application state is a great use case for React, and with the latest version including Hooks, it was a chance to get up to date on the latest features.

## Production Server

If you just want to interact with the application on a production server without having to install the project locally, you can use the application [here](https://kon-twitter-search.herokuapp.com/). This application is deployed using Heroku's free dynos, so sometimes it takes 30 seconds to spin up the server after its been asleep, so please be patient when getting started.

## What does it do?

The Application is a simple search tool that uses 2 of twitter's API endpoints to search through tweets and user timelines. There are 3 main inputs which are always available.

1. User
2. Term
3. Number of Tweets

If an entry is filled out in User it will search for and return the tweets from that user's timeline.

If there is no User and only a Search Term is filled out, then the application will search through all the most recent tweets on twitter.

If both a User and a Search Term is provided, then the application will search through that users timeline and filter for tweets that contain that term. As such, it is possible to not get any results back if you ask for an unused term on the users timeline.

Number of Tweets will attempt to return the specific number of tweets from the timeline or search. If you filter a users timeline for a specific term though, then you will not end up recieving the same number back.

Lastly, there is an option for Geolocation if you are not trying to search a users timeline. If you are searching using only a Search Term for all recent tweets, then you can also provide a latitude, longitude, and radius in miles to search and get all the tweets made from that location. This option disappears if there is any input in the user as it will be ignored, because twitter doesn't allow for user timelines to be filtered by geolocation.

## Application Installation

The application consists of 2 separate parts: a Rails API and a React frontend. In order to get the application working locally you need to have the following installed

* Ruby
* Node and NPM (or yarn)

### Ruby installation

Ruby can be installed with either a manager (such as RVM) or standalone. If installing a standalone version make sure to use Ruby 2.4.1, the version used by this application

Instructions can be found on [Ruby's site](https://www.ruby-lang.org/en/documentation/installation/), follow setup specific to your machine and operating system.

#### Install Bundler

[Bundler](https://bundler.io/) is used by Ruby applications in order to install and manage ruby gems for an application. You'll need it installed in order to install all the packages automatically for the project. Run this command from the command line after you have installed Ruby.

```bash
gem install bundler
```

### Node installation

There are numerous ways of installing node. My preferred method is with Node Version Manager (NVM) but you can also just install node directly. The node used with this application was node 11.6.0, but any of the node version 11 options should work.

You can find node versions [here](https://nodejs.org/en/download/current/) and this is the site for [nvm installation](https://github.com/creationix/nvm) if you prefer that route.

### Clone and Install the application

After cloning the repo locally, from the root directory, run the `install.sh` bash script to run the 2 installations. It will run the `bundler` and `npm` installations, and it will also run a `figaro` installation in order to generate some environment files.

## Environment API Keys

In order for the application to work, it depends on a API keys and a bearer token from twitter. These have _not_ been included in the repo in order to protect the keys from outside abusers. You need to create an application on twitter as a developer to run it locally and provide it with the following keys...

```yaml
twitter_api_key: YOUR API KEY
twitter_api_secret_key: YOUR SECRET API KEY
twitter_bearer_token: YOUR BEARER TOKEN FOR THE APPLICATION
```
you can also reach out to me via Github and request to use mine, and I will provide my applications token's at my discretion.

## Libraries

The following libraries were used to create this application

### Rails

>Name: Rails\
Version: 5.2\
Purpose: Backend Framework\
License: MIT\
Website: https://rubyonrails.org

### React

>Name: React\
Version: 16.8\
Purpose: Frontend Framework\
License: MIT\
Website: https://reactjs.org

### Figaro

>Name: Figaro\
Version: 1.1.8\
Purpose: Environment Variable Management\
License: MIT\
Website: https://github.com/laserlemon/figaro

### HTTP

>Name: HTTP\
Version: 4.0.5\
Purpose: HTTP Requests\
License: MIT\
Website: https://github.com/httprb/http\

### Styled Components

>Name: styled-components\
Version: 4.1.3\
Purpose: React Component Styling\
Liscense: MIT\
Website: https://www.styled-components.com

### Axios

>name: axios\
Version: 0.18.0\
Purpose: Frontend HTTP request library\
License: MIT\
Website: https://github.com/axios/axios


