import React, { Component } from 'react';
import axios from 'axios';
import SweetAlert from 'sweetalert-react';

class UserTwitter extends Component {
	constructor(props) {
		super(props);
		this.state = { show: false, error: null };
	}

	handleSubmit(event) {
		event.preventDefault();
		const userName = this.refs.inputTwitterUser.value; //eslint-disable-line
		axios.get(`/api/user/${userName}`)
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			const err = error.response.data.error;
			console.log(err);
			this.setState({ show: true, error: err });
		});
	}

	render() {
		return (
			<div className='container'>
				<SweetAlert
					show={this.state.show}
					title="Error"
					type="warning"
					text={this.state.error}
					onConfirm={() => this.setState({ show: false })}
				/>
				<form className='form-signin' onSubmit={this.handleSubmit.bind(this)} >
					<h2 className='form-signin-heading'>{ this.props.title }</h2>
					<label htmlFor='inputEmail' className='sr-only'>Twitter User</label>
					<input
						type='text' ref='inputTwitterUser' className='form-control'
						placeholder='eg: ComJasmo2' required='' autoFocus=''
					/>
				<button className='btn btn-lg btn-primary btn-block' type='submit'>Get Followers</button>
				</form>
			</div>
		);
	}
}

export default UserTwitter;
