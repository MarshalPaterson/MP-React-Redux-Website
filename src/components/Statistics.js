import React, { Component, PropTypes } from 'react';

export default class Statistics extends Component {
	render() {
		// Benchmarks are calculated from the time it takes to get from app init (src/index.js)
		// to render of containers/App.js.
		const { benchmark } = this.props;

		return (
			<div className="statistics">
				{/* React.js rendered this page in {benchmark} milliseconds. Refresh to benchmark again. */}
				<img src="../styles/mp.jpg" />
				Experience in developing across multiple coding languages with a firm belief in the importance of
				programming logic and team leadership. Interests are in building high-performance teams with Agile
				principles. Focused on finding solutions for software development with UML Modelling, Class Diagrams,
				Sequence Diagrams, Use Case Diagrams, design visualisations, drawing detail blueprints, writing
				specifications and explaining viewpoints. A Polyglot Engineer with current development stack is
				Javascript, React, React Native, Redux, Flux, Webpack, Node.js, .NET Core, C#, Java and Objective-C.
				plus Angular 2 and above.
			</div>
		);
	}
}

Statistics.propTypes = {
	benchmark: PropTypes.number.isRequired
};
