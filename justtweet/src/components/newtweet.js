import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class NewTweet extends Component {
    constructor(props) {
        super(props);
        this.state = { tweetText: '' };
    }

    handleChange = (event) => {
        this.setState({ tweetText: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Here you could call a function passed down from App.js to handle the tweet post logic
        this.props.onTweetPost(this.state.tweetText);
        this.setState({ tweetText: '' }); // Clear the input after submission
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicTweet">
                    <Form.Label>New Tweet</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="What's happening?" 
                        value={this.state.tweetText} 
                        onChange={this.handleChange} 
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Tweet
                </Button>
            </Form>
        );
    }
}

export default NewTweet;
