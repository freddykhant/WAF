import React from 'react';
import { Card, Button } from 'react-bootstrap';

const TweetCard = ({ tweet, onDelete, onLike }) => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Text>{tweet.text}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <Button variant="danger" onClick={() => onDelete(tweet.id)}>Delete</Button>
                    <Button variant="primary" onClick={() => onLike(tweet.id)}>
                        Like ({tweet.likes})
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default TweetCard;
