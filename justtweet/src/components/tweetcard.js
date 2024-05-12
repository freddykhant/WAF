import React from 'react';
import { Card, Button } from 'react-bootstrap';

const TweetCard = ({ tweet, onDelete, onLike }) => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between align-items-start">
                    <Card.Text>{tweet.text}</Card.Text>
                    <Button variant="outline-danger" size="sm" onClick={() => onDelete(tweet.id)} style={{ position: 'absolute', top: '10px', right: '10px' }}>X</Button>
                </div>
                <div className="mt-2 d-flex justify-content-between align-items-center">
                    <Button variant="primary" onClick={() => onLike(tweet.id)}>Like</Button>
                    <span>{tweet.likes} Likes</span>
                </div>
            </Card.Body>
        </Card>
    );
}

export default TweetCard;
