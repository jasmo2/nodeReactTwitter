import React, { Component } from 'react';
import axios from 'axios';

class UserTwitter extends Component {
	handleSubmit(event) {
		event.preventDefault();
		const userName = this.refs.inputTwitterUser.value; //eslint-disable-line
		axios.get(`/api/user/${userName}`)
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
	}

	render() {
		return (
			<div className='container'>
				<form className='form-signin' onSubmit={this.handleSubmit.bind(this)} >
					<h2 className='form-signin-heading'>{ this.props.title }</h2>
					<label htmlFor='inputEmail' className='sr-only'>Twitter User</label>
					<input
						type='text' ref='inputTwitterUser' className='form-control'
						placeholder='eg: jasmo2' required='' autoFocus=''
					/>
				<button className='btn btn-lg btn-primary btn-block' type='submit'>Get Followers</button>
				</form>
			</div>
		);
	}
}

export default UserTwitter;
