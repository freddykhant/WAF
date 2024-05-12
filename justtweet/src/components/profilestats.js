import React from 'react';
import { Card } from 'react-bootstrap';

const ProfileStats = ({ stats }) => {
    return (
        <Card className="text-center mt-3 mb-3">
            <Card.Body>
                <div className="d-flex justify-content-around">
                    <div>
                        <h5>{stats.tweets}</h5>
                        <p>Tweets</p>
                    </div>
                    <div>
                        <h5>{stats.following}</h5>
                        <p>Following</p>
                    </div>
                    <div>
                        <h5>{stats.followers}</h5>
                        <p>Followers</p>
                    </div>
                    <div>
                        <h5>{stats.likes}</h5>
                        <p>Likes</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProfileStats;
