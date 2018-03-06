import React from 'react';

import Question from './Question';
import Biography from './Biography';

class Person extends React.Component {
	render() {
		return (
			<div class="col-md-3 person">
				<div className="photo-container">
					<img src={this.props.photo} />
				</div>
				<div className="name">{this.props.name}</div>
				<div className="position">{this.props.position}</div>
				<Biography>This is a long Biography. One more sentance here. Ok, done!</Biography>
			</div>
		);
	}
}

export default Person;