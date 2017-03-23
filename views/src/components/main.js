import React, { Component } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
class Main extends Component {
    constructor(props){
      super(props);
      this.state = {
        loginForm: null,
        showModal: false
      };
      this.twitterA = this.twitterA.bind(this);
      this.twitterB = this.twitterB.bind(this);
    }
    twitterA () {
      axios.get('/api/auth/twitter/a')
      .then((response) => {
        response.data

      })
      .catch(function (error) {
        console.log(error);
      });
    }
    twitterB () {
      axios.get('/api/auth/twitter/b')
      .then((response) => {
        this.setState({
          loginForm: response.data,
          showModal: true
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    render() {
        return(
          <div className="container">
            <div className="col-md-6">
              <button onClick={this.twitterA} className="btn btn-lg btn-primary btn-block" type="submit">LogIn A</button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-lg btn-primary btn-block" type="submit">LogIn B</button>
            </div>

            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {this.state.loginForm}
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        )
    }
}

export default Main;
