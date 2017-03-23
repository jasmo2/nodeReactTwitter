import React, { Component } from 'react';
// import { Modal, Button } from 'react-bootstrap';
import UserTwitter from '../containers/userTwitter';

class Main extends Component {

    render() {
        return (
          <div className="container">
            <div className="col-md-6">
              <UserTwitter title={'User A'} />
            </div>
            <div className="col-md-6">
              <UserTwitter title={'User B'} />
            </div>
          </div>
        );
    }
}

export default Main;
