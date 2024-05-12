import React, { Component } from 'react';
import Navbar from './components/navbar';
import ProfileCover from './components/profilecover';
import ProfileInfo from './components/profileinfo';
import ProfileStats from './components/profilestats';
import NewTweet from './components/newtweet';
import TweetCard from './components/tweetcard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tweets: [],
        coverImageUrl: 'images/react2.jpeg',
        userStats: {
            tweets: 51,
            following: 420,
            followers: 583,
            likes: 241
        }
    };
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
            <ProfileCover coverImageUrl={this.state.coverImageUrl} />
            <ProfileInfo />
            <ProfileStats stats={this.state.userStats} />
            <NewTweet onTweetPost={this.handleTweetPost} />
            {this.state.tweets.map(tweet => (
                <TweetCard key={tweet.id} tweet={tweet} onDelete={this.handleDeleteTweet} />
            ))}
        </>
    );
  }
}

export default App;