import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import TweetCard from './components/tweetcard';
import NewTweet from './components/newtweet';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = { tweets: [] };
  }

  handleTweetPost = (tweetText) => {
      const newTweet = { id: Date.now(), text: tweetText, likes: 0 };
      this.setState({ tweets: [newTweet, ...this.state.tweets] });
  }

  handleDeleteTweet = (tweetId) => {
      this.setState({ tweets: this.state.tweets.filter(tweet => tweet.id !== tweetId) });
  }

  handleLikeTweet = (tweetId) => {
      this.setState({
          tweets: this.state.tweets.map(tweet => {
              if (tweet.id === tweetId) {
                  return { ...tweet, likes: tweet.likes + 1 };
              }
              return tweet;
          })
      });
  }

  render() {
      return (
          <>
              <Navbar />
              <NewTweet onTweetPost={this.handleTweetPost} />
              {this.state.tweets.length > 0 ? (
                  this.state.tweets.map(tweet => (
                      <TweetCard key={tweet.id} tweet={tweet} onDelete={this.handleDeleteTweet} onLike={this.handleLikeTweet} />
                  ))
              ) : (
                  <p className="text-center mt-4">No tweets to display. Start tweeting now!</p>
              )}
          </>
      );
  }
}

export default App;