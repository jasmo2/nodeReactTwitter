import React, { Component } from 'react';
import { connect } from 'react-redux';
import FollowerItem from '../components/follower';


class FollowersList extends Component {

  render() {
    const { followers } = this.props;
    if (followers.length === 0) {
      return null;
    }
    return (
      <div className="container">


        <div className="row">
          <div className="col-xs-12 col-sm-offset-1 col-sm-10">
            <div className="panel panel-default">
              <div className="panel-heading c-list">
                <span className="title">Common Followers</span>
              </div>
              <ul className="list-group" id="contact-list">
                { followers.result.map(follower => (
                     <FollowerItem follower={follower} />
                  ))
                }
              </ul>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { followers } = state.followers;
  return { followers };
};

export default connect(mapStateToProps)(FollowersList);
