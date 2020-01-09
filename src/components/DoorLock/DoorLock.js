import React, {Component} from 'react';
import {connect} from 'react-redux';
import './DoorLock.css';

const BUTTONS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

class DoorLock extends Component {
	render() {
		return (
			<div className='door_lock'>
				<input
					type="text"
					className={this.props.resultColor}
					value={this.props.string}
					onChange={this.props.addNumber}
					disabled
				>

				</input>
				{BUTTONS.map(num => (
						<button
							key={num}
							onClick={() => this.props.addNumber(num)}
						>{num}
						</button>
				))}
				<button onClick={this.props.removeNumber}>&lt;</button>
				<button onClick={this.props.enterCode}>E</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		code: state.code,
		resultColor: state.resultColor,
		string: state.string
	}
};

const mapDispatchToProps = dispatch => {
	return {
		addNumber: (number) => dispatch({type: 'ADD', number}),
		removeNumber: () => dispatch({type: 'REMOVE'}),
		enterCode: () => dispatch({type: 'ENTER'})
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(DoorLock);