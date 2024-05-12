import React, { Component } from 'react';

class ProfileInfo extends Component {
    render() {
        return (
            <div className="profile-info">
                <img src="profile.jpg" alt="Profile" className="profile-picture"/>
                <h3>Freddy Khant</h3>
                <p>@freddykhant</p>
                <p>Joined May 2018</p>
            </div>
        );
    }
}

export default ProfileInfo;
