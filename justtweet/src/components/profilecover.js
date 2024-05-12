import React from 'react';
import { Container } from 'react-bootstrap';

const ProfileCover = ({ coverImageUrl }) => {
    const coverStyle = {
        backgroundImage: `url(${coverImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px', // You can adjust the height as needed
        width: '100%',
        borderRadius: '0.25rem',
        marginBottom: '20px'
    };

    return (
        <Container className="p-0" fluid>
            <div style={coverStyle}></div>
        </Container>
    );
}

export default ProfileCover;
