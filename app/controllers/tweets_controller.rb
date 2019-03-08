class TweetsController < ApplicationController
  def search
    term = params[:term]
    number_of_tweets =  params[:numberOfTweets]
    location = params[:location]

    filtered_params = {
      :q => term,
      :count => number_of_tweets,
      :geocode => location,
      :tweet_mode => "extended",
      :lang => "en"
    }.compact
    
    url = "https://api.twitter.com/1.1/search/tweets.json"

    response = HTTP
      .auth(bearer_auth_string)
      .get(url, :params => filtered_params)

    body = JSON.parse(response.body,{
      symbolize_names: true
    })

    tweets = extract_info(body[:statuses])

    render json: tweets
  end

  def user
    user = params[:user]
    term = params[:term]
    number_of_tweets = params[:numberOfTweets]
    url = "https://api.twitter.com/1.1/statuses/user_timeline.json"

    filtered_params = {
      :screen_name =>  user,
      :count => number_of_tweets,
      :tweet_mode => "extended"
    }.compact

    response = HTTP
      .auth(bearer_auth_string)
      .get(url, :params => filtered_params)


    body = JSON.parse(response.body, {
      symbolize_names:  true
    })

    if is_error?(body) 
      render json: body
    else
      tweets = extract_info(body)
      if term
        tweets = filter_tweets(tweets, term)
      end
      render json: tweets
    end
  end

  private

  def is_error?(body)
    body.is_a?(Hash) && body.has_key?(:errors)
  end

  def filter_tweets(tweets, term)
    return tweets.select do |tweet|
      tweet[:text].downcase.include?(term.downcase)
    end
  end

  def bearer_auth_string
    "Bearer #{ENV["twitter_bearer_token"]}"
  end

  def extract_info(tweets)
    tweets.map do |status|
      user = status[:user]
      {
        created_at: status[:created_at],
        text: status[:full_text],
        truncated: status[:truncated],
        user: {
          screen_name: user[:screen_name],
          name: user[:name]
        },
        geo: status[:geo],
      }
    end
  end
end
