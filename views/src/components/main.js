import React, { Component } from 'react';
import axios from 'axios';
// import { Modal, Button } from 'react-bootstrap';
class Main extends Component {
    constructor(props) {
      super(props);
      this.twitterA = this.twitterA.bind(this);
      this.twitterB = this.twitterB.bind(this);
    }

    twitterA() {
      axios.get('/api/user_a')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }
    twitterB() {
      axios.get('/api/testreq')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    render() {
        return (
          <div className="container">
            <div className="col-md-6">
              <button
                onClick={this.twitterA} className="btn btn-lg btn-primary btn-block"
                type="submit"
              > User A</button>
            </div>
            <div className="col-md-6">
              <button onClick={this.twitterB} className="btn btn-lg btn-primary btn-block" type="submit">User B</button>
            </div>
          </div>
        );
    }
}

export default Main;
