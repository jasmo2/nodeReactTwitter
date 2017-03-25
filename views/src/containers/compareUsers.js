import React, { Component } from 'react';
import axios from 'axios';
import SweetAlert from 'sweetalert-react';
import { connect } from 'react-redux';
import { addFollowers } from '../actions';

class CompareButton extends Component {
    constructor(props) {
      super(props);
      this.state = { show: false, error: null };
      this.compare = this.compare.bind(this);
    }
    compare() {
      const { userA, userB } = this.props.users;
      if (userA && userB) {
        axios.get(`/api/common-followers/${userA}/${userB}`)
        .then((response) => {
          console.log(response.data);
          // this.props.addFollowers(response.data);
        })
        .catch((error) => {
          const err = error.response.data.error;
          console.log(err);
          this.setState({ show: true, error: err });
        });
      } else {
        this.setState({ show: true, error: 'set the two users' });
      }
    }
    render() {
        return (
          <div >
            <SweetAlert
              show={this.state.show}
              title="Error"
              type="warning"
              text={this.state.error}
              onConfirm={() => this.setState({ show: false })}
            />
            <button onClick={this.compare} className='btn-block btn-success'>
              {this.props.title}
            </button>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  const { users } = state.users;
  console.log(`CompareButton usersState: ${JSON.stringify(users)}`);
  return { users };
};

const mapDispatchToProps = {
  addFollowers
};

export default connect(mapStateToProps, mapDispatchToProps)(CompareButton);
