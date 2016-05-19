import React from 'react';

export default React.createClass({
	getInitialState() {
		return {
			newUserName: ''
		}
	},
	propTypes: {
		addUser: React.PropTypes.func.isRequired
	},
	onNewUserNameChanged(e) {
		this.setState({
			newUserName: e.target.value
		});
	},
	onAddNewUserClicked() {
		this.props.addUser(this.state.newUserName);
		this.setState({ newUserName: ''});
	},
	onKeyPressed(e) {
		if (e.key === 'Enter') {
			this.onAddNewUserClicked();
		}
	},
	render() {
		return (
			<div>
				<input type='text' value={this.state.newUserName} onChange={this.onNewUserNameChanged} onKeyPress={this.onKeyPressed} />
				<button onClick={this.onAddNewUserClicked}>Add Friend</button>
			</div>
		);
	}
});