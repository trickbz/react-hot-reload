import React from 'react';

export default React.createClass({
	render() {
		var listItems = this.props.friends.map(friend => {
			return <li key={friend.id}>{friend.name}</li>
		});
		return (
			<div>
				<h4>Friends list:</h4>
				<ul>
					{listItems}
				</ul>
			</div>
		);
	}
});