import React, {Component} from 'react'
import {connect} from 'react-redux'
import actionCreator from "../../store/actionCreator";

class HomeFavorite extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	UNSAFE_componentWillMount() {
		this.props.changeNavStates()
	}

	render() {
		return (
				<h2>这是Favorite</h2>
		)
	}
}

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		changeNavStates: () => dispatch(actionCreator.changeNavState('favorite'))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeFavorite);