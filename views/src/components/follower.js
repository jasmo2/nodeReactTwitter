import React, { Component } from 'react';

class FollowerItem extends Component {

  render() {
    const {profile_image_url, name, location, screen_name} = this.props.follower;
    return (
      <li className="list-group-item">
        <div className="col-xs-12 col-sm-3">
          <img src={profile_image_url} alt="Scott Stevens" className="img-responsive img-circle" />
        </div>
        <div className="col-xs-12 col-sm-9">
          <span className="name">{screen_name}</span><br />
          <span
            className="glyphicon glyphicon-map-marker text-muted c-info"
            data-toggle="tooltip" title="5842 Hillcrest Rd"
          >{location}
          </span><br />
          <span className="visible-xs">
            <span className="text-muted">{name}</span>
          </span><br />
        </div>
        <div className="clearfix" />
      </li>
    );
  }
}

export default FollowerItem;
