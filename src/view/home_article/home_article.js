import React, {Component} from 'react'
import {connect} from 'react-redux'
import actionCreator from '../../store/actionCreator'

class HomeArticle extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	UNSAFE_componentWillMount () {
		this.props.changeNavStates();
	}

	render() {
		let {changeNavStates} = this.props;
		return (
				<div>
					<h2>这是Article  {this.state.navState}</h2>
					<button onClick={changeNavStates}>heh</button>
				</div>
		)
	}
}

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		changeNavStates: () => dispatch(actionCreator.changeNavState('article'))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeArticle);