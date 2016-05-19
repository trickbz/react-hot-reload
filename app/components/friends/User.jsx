import React from 'react';
import AddFriend from './AddFriend.jsx';
import FriendsList from './FriendsList.jsx';

export default React.createClass({
	getInitialState() {
		return {
			name: 'Aleksey Petrenko',
			friends: [
				{ name: 'Tanya', id: 1},
				{ name: 'Vasya', id: 2},
				{ name: 'Sveta', id: 3}
			],
			nextUserId: 4
		}
	},
	addUser(userName) {
		var newUser = { name: userName, id: this.state.nextUserId };
		this.setState({
			friends: this.state.friends.concat([newUser]),
			nextUserId: ++this.state.nextUserId
		});
	},
	render() {
		return (
			<div>
				<h4>Name: {this.state.name}</h4>
				<AddFriend addUser={this.addUser}></AddFriend>
				<FriendsList friends={this.state.friends}></FriendsList>
			</div>
		);
	}
});