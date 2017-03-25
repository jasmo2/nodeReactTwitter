import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserA, addUserB } from '../actions';

class UserTwitter extends Component {
	constructor(props) {
		super(props);
		this.onChangeUser = this.onChangeUser.bind(this);
	}

	onChangeUser(event) {
		event.preventDefault();
		const userName = this.refs.inputTwitterUser.value; //eslint-disable-line

		if (this.props.userType === 'A') {
			this.props.addUserA(userName);
		} else if (this.props.userType === 'B') {
			this.props.addUserB(userName);
		}
	}

	render() {
		return (
			<div className='container'>
				<form className='form-signin' >
					<h2 className='form-signin-heading'>{ this.props.title }</h2>
					<label htmlFor='inputEmail' className='sr-only'>Twitter User</label>
					<input
						type='text' ref='inputTwitterUser' onChange={this.onChangeUser} className='form-control'
						placeholder='eg: ComJasmo2' required='' autoFocus=''
					/>
				</form>
			</div>
		);
	}
}


const mapDispatchToProps = {
  addUserA, addUserB
};

export default connect(null, mapDispatchToProps)(UserTwitter);
