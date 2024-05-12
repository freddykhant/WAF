import React, { Component } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

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
        this.props.onTweetPost(this.state.tweetText);
        this.setState({ tweetText: '' }); 
    }

    render() {
        return (
            <div className="mt-4 mb-4">
                <Form onSubmit={this.handleSubmit}>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="What's happening?"
                            value={this.state.tweetText}
                            onChange={this.handleChange}
                            aria-label="New tweet"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-primary" type="submit">Tweet</Button>    
                    </InputGroup>
                </Form>
            </div>
        );
    }
}

export default NewTweet;