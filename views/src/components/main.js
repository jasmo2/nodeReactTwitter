import React, { Component } from 'react';
import UserTwitter from '../containers/userTwitter';
import CompareButton from '../containers/compareUsers';

class Main extends Component {

    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <UserTwitter title={'User A'} userType={'A'}/>
              </div>
              <div className="col-md-6">
                <UserTwitter title={'User B'} userType={'B'}/>
              </div>
            </div>
            <br/><br/><br/>
            <div className="row">
              <div className="col-md-12">
                <CompareButton title={'compare'}/>
              </div>
            </div>
          </div>
        );
    }
}

export default Main;
